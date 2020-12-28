import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name=''
  errMsg=null
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  doSignup(){
    if(!this.name) return this.errMsg = 'Please fill the name'
    this.userService.signup(this.name)
    this.router.navigateByUrl('/')
  }
}
