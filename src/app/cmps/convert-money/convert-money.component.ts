import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'convert-money',
  templateUrl: './convert-money.component.html',
  styleUrls: ['./convert-money.component.scss']
})
export class ConvertMoneyComponent implements OnInit {

  res: number
  money: number
  @Input() rate: number
  @Output() addCoins = new EventEmitter()
  constructor() { }
  ngOnInit(): void {

  }
  convertMoney() {
    this.res = this.money * this.rate
  }
  addCoinsEmit() {
    this.addCoins.emit(this.money)
    this.money = null
    this.res = null
  }
}
