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

               }

  ngOnInit(): void {
    // In the follwing code we are creating attributes that the html form will consist of, we will later bind data to the attributes that we are creating now
    this.placeOrderForm = this.formBuilder.group({ // Formbuilder allows us to create a form, it falls part of the "Relative forms Module"
        supplierName: new FormControl('',[Validators.required, Validators.minLength(2)]), // Setting up attributes and also adding validations
        siteName: new FormControl('',[Validators.required, Validators.minLength(2)]), // Setting up attributes and also adding validations
        itemCode: [''], // Setting up attributes and also adding validations
        itemName: [''], // Setting up attributes and also adding validations
        quantity: [''], // Setting up attributes and also adding validations
        orderID: ['']
    })

  
}

async createOrder() {
  const newOrder = {
    SupplierName: this.placeOrderForm?.controls['supplierName'].value, // binding data from html form
    SiteName: this.placeOrderForm?.controls['siteName'].value, // binding data from html form
    ItemCode: this.placeOrderForm?.controls['itemCode'].value, // binding data from html form
    ItemName: this.placeOrderForm?.controls['itemName'].value, // binding data from html form
    Quantity: this.placeOrderForm?.controls['quantity'].value, // binding data from html form

  }
  

  let result = await this.apiService.CreateOrder(newOrder); // calling createOrder method and passing values that were binded in the previous code

  this.allOrders.push(result); // after passing values to our method we can then push them to the rest of orders
  
  alert("order created"); // to confirm success(for debugging purposes)
  
  //debugger;
}

onHandleTag(tag: string) {
  this.oneSignal.sendTag("tech", tag).then(() => {
    console.log(`sent tag: ${tag}`)
  })
}

onRegister() {
  this.loading = true;

}

// The following method is for calling all items in the order table from dynamodb
async listOrders() {
  let result = await this.apiService.ListOrders(); // Calling listOrders method from apiService(note: whatever is on a service can be called in any part of the project)
  this.allOrders = result.items; // puttin the aitems we got from the previous query to the arraylist we previously created.

  for(var myOrders of this.allOrders) { // was trying to get only the id from order since it contains other attributes, wanted to pass that id in an update method
  let queryid = myOrders.id

  console.log(queryid); // printing the ids to confirm if the ids were succesfully retrieved.

  }

}

onUpdate() {
  
  const NewUdate = {
    id: "", 
    SupplierName: "Athi",
    SiteName: "Site B"
  }
}


}
