import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path: "orders", component: OrderComponent},
  {path: "placeOrders", component: PlaceOrderComponent},
  {path: "update", component: UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
