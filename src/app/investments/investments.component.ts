import { AccountService } from './../services/account.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent  {
  cost: number = 0;
  value: number = 0;
  change: number = 0;
  stocks: any = [];
  //length: number = 0;

  constructor(public accountService: AccountService) { }

  ngDoCheck(){
    if (this.accountService.stocks.length !== this.stocks.length) {
      this.stocks = this.accountService.stocks;
    }
    if (this.cost !== this.accountService.cost || this.value !== this.accountService.value) {
      this.cost = this.accountService.cost;
      this.value = this.accountService.value;
      this.change = this.accountService.value - this.accountService.cost;
    }
  }

  sell(index: any): void {
    this.accountService.sell(index);
  }

}
