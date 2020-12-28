import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact
  @Input() maxCoins
  @Output() onTransferCoins = new EventEmitter()
  errMsg:string=null
  amount:number=0
  constructor() { }
  ngOnInit(): void {
  }
  transferCoins(){
    if(this.amount === 0 || this.amount > this.maxCoins) return this.errMsg = 'Cant transfer sorry'
    this.onTransferCoins.emit(this.amount)
    this.amount=0
  }
}
