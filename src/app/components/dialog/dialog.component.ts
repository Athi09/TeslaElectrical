// https://www.youtube.com/watch?v=jGbP620NahE

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService } from 'src/app/API.service';
import { User } from 'src/app/models/user';
import { OrderComponent } from '../order/order.component';
import { CognitoServiceService } from 'src/app/services/cognito-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  user: User | undefined;
  materialForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private apiService: APIService,
              private cognitoService: CognitoServiceService) { }

  ngOnInit(): void {
    this.materialForm = this.formBuilder.group({
      projectName: ['', Validators.required], //new FormControl('',[Validators.required, Validators.minLength(2)]), 
      materialDesc: new FormControl('',[Validators.required, Validators.minLength(2)]), 
      quantity: new FormControl('',[Validators.required, Validators.minLength(2)]),
      unitOfMeasure: new FormControl('',[Validators.required, Validators.minLength(2)]),
    });

    if(this.editData){
      this.materialForm.controls['projectName'].setValue(this.editData.ProjectName);
      this.materialForm.controls['materialDesc'].setValue(this.editData.MaterialDesc);
      this.materialForm.controls['quantity'].setValue(this.editData.Quantity);
      this.materialForm.controls['unitOfMeasure'].setValue(this.editData.UnitOfMeasure);
    }

    //this.ordersComponent.listMaterial();
  }

  
    async saveChanges() {
      // The following code is for data binding between html form and typescript(ts) file
      const newUpdate = {// When we perform data binding values will be stored to new updates then later pass those values as a paramter for updating
        id: this.editData.id, // binding data from html forms to make a query in appsync
        ProjectName: this.materialForm?.controls['projectName'].value, // binding data from html forms to make a query in appsync //@skip(if(true)),
        MaterialDesc: this.materialForm?.controls['materialDesc'].value, // binding data from html forms to make a query in appsync
        Quantity: this.materialForm?.controls['quantity'].value, // binding data from html forms to make a query in appsync
        UnitOfMeasure: this.materialForm?.controls['unitOfMeasure'].value, // binding data from html forms to make a query in appsync
        
      }
  
       let result = await this.apiService.UpdateMaterial(newUpdate); // calling method for updating orders in a dynamodb
       
       console.log(`edited by: ${this.user?.email}`);

       //console.log(`edited by: ${this.cognitoService.UserDetails}`);
      
       alert('new update added!') // pop up to confirm that it will be successful
       
    }  
    getUserDetails() {
      let details = this.cognitoService.UserDetails;
      console.log(`current user: ${details}`);
    }

 

}
