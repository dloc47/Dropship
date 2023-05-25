import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { NavComponent } from './layout/nav/nav.component';
import { CheckoutComponent } from './layout/checkout/checkout.component';
import { CartComponent } from './layout/cart/cart.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShopComponent } from './layout/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavComponent,
    CheckoutComponent,
    CartComponent,
    FooterComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
