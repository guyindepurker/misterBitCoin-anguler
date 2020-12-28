import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  subscription: Subscription
  contacts:Contact[] = []
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe(contacts=>{
      this.contacts = [...contacts]
      console.log(' this.contacts page:',  this.contacts )
    })
    this.contactService.loadContacts()
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  setFilter(filterBy){
    console.log('filterBy:', filterBy)
    this.contactService.loadContacts(filterBy)
  }
}
