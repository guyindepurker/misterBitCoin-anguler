import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './cmps/filter/filter.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { ConvertMoneyComponent } from './cmps/convert-money/convert-money.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BitcoinAppComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ChartComponent,
    StaticPageComponent,
    ContactEditComponent,
    AppHeaderComponent,
    FilterComponent,
    MoveListComponent,
    TransferFundComponent,
    SignupComponent,
    MovePreviewComponent,
    ConvertMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
