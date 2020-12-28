import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contactToEdit: Contact
  errMsg: string = null
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('created');
    this.route.data.subscribe(data=>{
      this.loadContact(data.contact)
    })
  }


  loadContact(contact) {
    if (contact) {
      this.contactToEdit = contact
    } else this.contactToEdit = this.getEmptyContact()
  }
  getEmptyContact(): Contact {
    return {
      name: '',
      phone: '',
      email: ''
    }
  }
  saveContact(ev: Event) {
    ev.preventDefault()
    const { name, phone, email } = this.contactToEdit
    if (!name || !phone || !email) {
      return this.errMsg = 'Must to fill All the fields'
    }
    this.contactService.saveContact(this.contactToEdit).subscribe(() => {
      this.router.navigate(['/contact/'])

      this.contactToEdit = this.getEmptyContact()
    })
  }
  removeContact(id) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.router.navigate(['/contact/'])
    })

  }
}
