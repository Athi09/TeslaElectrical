import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

import awsconfig from '../aws-exports';
import Amplify from 'aws-amplify';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';


Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PlaceOrderComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
