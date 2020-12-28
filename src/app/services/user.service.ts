import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';
import { Move } from '../models/move.model';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private gUsers=this._loadUsers();
  private USERSDB = 'users_db';
  private LoggedinUser ='LoggedinUser';
  constructor(private storageService:StorageService) { }
 public getUser():User{
  const user = this.storageService.load(this.LoggedinUser)
  return user
  }

 public addMove(contact:Contact,amount:number){
    const user = this.storageService.load(this.LoggedinUser)
    const move = new Move(undefined,contact._id,contact.name,Date.now(),amount)
    move.setId()
    console.log('move:', move)
    user.coins -= amount
    user.moves.unshift(move)
    this.storageService.save(this.LoggedinUser,user)
    this._saveUsersToStorage(user)
    return user
  }
  public addCoins(coins) {
    const user = this.storageService.load(this.LoggedinUser)
    user.coins += coins
    this.storageService.save(this.LoggedinUser, user);
    this._saveUsersToStorage(user)
    return user
  }
  public signup(name) {
    let user = this._handleLogin(name)
    if(!user) {
      user= new User(undefined,name)
      this.gUsers.push(user);
      this._saveUsersToStorage()
    }
    this.storageService.save(this.LoggedinUser, user);
    return user;
  }
  public doLogout() {
    this.storageService.remove(this.LoggedinUser)
  }



  private  _handleLogin(name) {
    const user = this.gUsers.find(gUser => gUser.name === name)
    const res  = user ? user : null
    return res
  }
  private _loadUsers() {
    let users = this.storageService.load(this.USERSDB);
    if (!users) {
      users = [];
      this.storageService.save(this.USERSDB, users);
    }
   
   return users;
  }

  private _saveUsersToStorage(user=null) {
    if(user){
      const idx = this.gUsers.findIndex(gUser=>gUser._id===user._id)
      this.gUsers.splice(idx,1,user)
    }
    this.storageService.save(this.USERSDB, this.gUsers);
  }
}
