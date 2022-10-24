import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

import awsconfig from '../aws-exports';
import Amplify from 'aws-amplify';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';
import { ProjectNameComponent } from './components/material/project-name.component';
import { ProjectComponent } from './components/project/project.component';
import { RequirementsListComponent } from './components/requirements-list/requirements-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { DialogComponent } from './components/dialog/dialog.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MessageModelComponent } from './components/message-model/message-model.component';
import { ApprovalDialogComponent } from './components/approval-dialog/approval-dialog.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SiteConfirmComponent } from './components/site-confirm/site-confirm.component';
import { DialogSiteComponent } from './components/dialog-site/dialog-site.component';



Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PlaceOrderComponent,
    UpdateComponent,
    ProjectNameComponent,
    ProjectComponent,
    RequirementsListComponent,
    DialogComponent,
    SignupComponent,
    SignInComponent,
    MessageModelComponent,
    ApprovalDialogComponent,
    OrdersComponent,
    SiteConfirmComponent,
    DialogSiteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    AmplifyAuthenticatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
    
    //NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
