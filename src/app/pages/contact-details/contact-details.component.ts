import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Move } from '../../models/move.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(private userService:UserService ,private contactService:ContactService,private route: ActivatedRoute,private router: Router) {

   }
  contact:Contact
  user:User
  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.route.data.subscribe(data=>{
      this.contact = data.contact
    })
    // this.route.params.subscribe(params => this.loadContact(params.id))
  }
  get movesToShow():Move[]{
    const moves = this.user.moves.filter(move=>move.todId === this.contact._id)
    return moves
  }

onTransferCoins(amount){
  const updatedUser = this.userService.addMove(this.contact,amount)
  this.user = updatedUser
}
  // loadContact(contactId){
  //     const contact$ = this.contactService.getContactById(contactId)
  //     contact$.subscribe(contact=>this.contact=contact)
  // }
  goBack(){
    this.router.navigate(['/contact/'])
  }
  goToEdit(id){
    this.router.navigate(['/edit',id])
  }
  removeContact(id){
    this.contactService.deleteContact(id).subscribe(()=>{
      this.router.navigate(['/contact/'])
    })

  }
}
