import { Dialog } from '@angular/cdk/dialog';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, CanActivate } from '@angular/router';
//import { SignInComponent, SignUpComponent } from '@aws-amplify/ui-angular';
import { DialogComponent } from './components/dialog/dialog.component';
import { OrderComponent } from './components/order/order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProjectNameComponent } from './components/material/project-name.component';
import { ProjectComponent } from './components/project/project.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateComponent } from './components/update/update.component';
import { TeslaWebGuardGuard } from './tesla-web-guard.guard';
import { OrdersComponent } from './components/orders/orders.component';
import { components } from '@aws-amplify/ui/dist/types/theme/tokens/components';
import { SiteConfirmComponent } from './components/site-confirm/site-confirm.component';

const routes: Routes = [
  {path: "order", component: OrderComponent }, //canActivate: [TeslaWebGuardGuard]
  {path: "placeOrders", component: PlaceOrderComponent},
  {path: "update", component: UpdateComponent},
  {path: "projectName", component: ProjectNameComponent},
  {path: "OfficeOrders", component: OrdersComponent},
  {path: "siteOrder", component: SiteConfirmComponent},
  {path: "", component: ProjectComponent},
  {path: "dialog", component: DialogComponent},
  {path: "signin", component: SignInComponent},
  {path: "signup", component: SignupComponent},
  {path: "**", component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
