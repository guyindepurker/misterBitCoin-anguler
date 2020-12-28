import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Observable<Contact>> {
  constructor(private contactService:ContactService){}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id')
    const contact$ = this.contactService.getContactById(id)
    return contact$
  }
}
