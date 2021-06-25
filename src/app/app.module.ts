import { StocksInterceptor } from './services/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { CurrencyPipe } from '@angular/common';


import { AppComponent } from './app.component';
import { TickerComponent } from './ticker/ticker.component';
import { StocksComponent } from './stocks/stocks.component';
import { InvestmentsComponent } from './investments/investments.component';
import { AlertComponent } from './alert/alert.component';

import { LocalStorageService } from './services/local-storage.service'
import { AccountService } from './services/account.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    StocksComponent,
    InvestmentsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule,
  ],
  providers: [
    AlertService,
    LocalStorageService,
    CurrencyPipe,
    AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StocksInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
