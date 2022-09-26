import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
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

  /*
  async updateOrder($postId: ID) {
    const newOrder = {
      SupplierName: this.placeOrderForm?.controls['supplierName'].value,
      SiteName: this.placeOrderForm?.controls['siteName'].value,
      ItemCode: this.placeOrderForm?.controls['itemCode'].value,
      ItemName: this.placeOrderForm?.controls['itemName'].value,
      Quantity: this.placeOrderForm?.controls['quantity'].value,
    }
  
    let result = await this.apiService.UpdateOrder(newOrder);
  } */



  async listOrders() {
    let result = await this.apiService.ListOrders();
    this.allOrders = result.items;
  }
  


}
