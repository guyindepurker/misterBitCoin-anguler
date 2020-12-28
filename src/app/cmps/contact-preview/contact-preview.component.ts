import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToDetails(id){
    this.route.navigate(['/contact/'+id])
  }
  goToEdit(ev,id){
    ev.stopPropagation()
    console.log('id preview',id);
    
    this.route.navigate(['/edit',id])
  }

}
