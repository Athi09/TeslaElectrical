import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ignoreElements, skip } from 'rxjs';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  placeOrderForm: FormGroup | undefined;
  allOrders: any = [];

  constructor(private formBuilder: FormBuilder, //injecting dependencies that we will nedd in this class
              private apiService: APIService, 
              ) { } //private dialog: MatDialog

  async ngOnInit(): Promise<void> {
      
    this.placeOrderForm = this.formBuilder.group({
      supplierName: new FormControl('',[Validators.required, Validators.minLength(2)]), // setting up form attributes and validating
      siteName: new FormControl('',[Validators.required, Validators.minLength(2)]), // setting up form attributes and validating
      itemCode: [''], // setting up form attributes
      itemName: [''], // setting up form attributes
      quantity: [''],
      orderID: ['']
       
  })

  let results = await this.apiService.ListOrders(); // calling method for getting all orders from dynamodb 
  this.allOrders = results.items; // We defined an arraylist allorders[], here we populating that arraylist with items that we got from the query above
  
  }


  // updating method
  async updateOrder() {
    // The following code is for data binding between html form and typescript(ts) file
    const newUpdate = {// When we perform data binding values will be stored to new updates then later pass those values as a paramter for updating
      id: this.placeOrderForm?.controls['orderID'].value, // binding data from html forms to make a query in appsync
      SupplierName: this.placeOrderForm?.controls['supplierName'].value, // binding data from html forms to make a query in appsync //@skip(if(true)),
      SiteName: this.placeOrderForm?.controls['siteName'].value, // binding data from html forms to make a query in appsync
      ItemCode: this.placeOrderForm?.controls['itemCode'].value, // binding data from html forms to make a query in appsync
      ItemName: this.placeOrderForm?.controls['itemName'].value, // binding data from html forms to make a query in appsync
      Quantity: this.placeOrderForm?.controls['quantity'].value,  // binding data from html forms to make a query in appsync
    }

   /* let original = await this.apiService.ListOrders();
    this.allOrders = original.items; */

     let result = await this.apiService.UpdateOrder(newUpdate); // calling method for updating orders in a dynamodb
     alert('new update added!') // pop up to confirm that it will be successful
  } 

// method for getting a list of all the orders 
  async listOrders() { // we need the async keyword for using await keyword
    let result = await this.apiService.ListOrders(); // calling the method from the api
    this.allOrders = result.items; // storing items called from app sync to an arraylist
  }

  editOrder() {
   // this.dialog.open
  }
  


}
