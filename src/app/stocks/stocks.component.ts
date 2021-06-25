import { AccountService } from './../services/account.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent  {
  @Input() stocks: any;

  constructor(private accountService: AccountService) { }

  buy(stock: any): void {
    this.accountService.purchase(stock);
  }


}