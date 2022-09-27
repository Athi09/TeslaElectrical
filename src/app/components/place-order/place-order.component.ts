import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  placeOrderForm: FormGroup | undefined;
  allOrders: any = [];
  loading: boolean = false;
  
  /*
  express = require("express");
  cors = require("cors");
  bodyParser = require("body-parser");
  nodemailer = require("nodemailer"); */

  constructor(private formBuilder: FormBuilder,
              private apiService: APIService,
              private oneSignal: OneSignal) {
                this.oneSignal.init({
                  appId: '1b8918ca-191f-4dbe-86bb-423f77642cb5'
                });
               }

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

onHandleTag(tag: string) {
  this.oneSignal.sendTag("tech", tag).then(() => {
    console.log(`sent tag: ${tag}`)
  })
}

onRegister() {
  this.loading = true;
  this
}


}
