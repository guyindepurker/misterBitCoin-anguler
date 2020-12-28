import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss']
})
export class MovePreviewComponent implements OnInit {
  @Input() move
  constructor() { }

  ngOnInit(): void {
  }
  
  get time(){
    return moment(this.move.at).format('MMMM D YYYY, h:mm:ss')
  }
  get amount(){
    return this.move.amount + ' coins'
  }

}
