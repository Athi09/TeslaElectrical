import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  placeOrderForm: FormGroup | undefined;
  allOrders: any = [];

  constructor(private formBuilder: FormBuilder,
              private apiService: APIService) { }

  ngOnInit(): void {
    this.placeOrderForm = this.formBuilder.group({
        supplierName: new FormControl('',[Validators.required, Validators.minLength(2)]),
        siteName: new FormControl('',[Validators.required, Validators.minLength(2)]),
        itemCode: [''],
        itemName: [''],
        quantity: ['']
    })

  
}

async createOrder() {
  const newOrder = {
    SupplierName: this.placeOrderForm?.controls['supplierName'].value,
    SiteName: this.placeOrderForm?.controls['siteName'].value,
    ItemCode: this.placeOrderForm?.controls['itemCode'].value,
    ItemName: this.placeOrderForm?.controls['itemName'].value,
    Quantity: this.placeOrderForm?.controls['quantity'].value,

  }
  

  let result = await this.apiService.CreateOrder(newOrder);

  this.allOrders.push(result);
  
  alert("order created");
  
  //debugger;
}


}
