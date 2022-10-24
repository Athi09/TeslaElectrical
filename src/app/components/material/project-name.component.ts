import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { searchfield } from '@aws-amplify/ui/dist/types/theme/tokens/components/searchField';
import { filter } from 'rxjs';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-project-name',
  templateUrl: './project-name.component.html',
  styleUrls: ['./project-name.component.css']
})
export class ProjectNameComponent implements OnInit {

  projectMaterialForm: FormGroup | undefined;
  newprojectName: String | undefined;
  allMaterial: any = [];
  allRequirements: any = [];
  allProjects: any = [];
  projectName2: string | undefined;
  
  constructor( private formBuilder: FormBuilder, //injecting dependencies that we will nedd in this class
               private apiService: APIService) { }

  async ngOnInit(): Promise<void> { 
    // The following code is for data binding between html form and typescript(ts) file
    this.projectMaterialForm = this.formBuilder.group({ // formBuilder allows us to build forms in Angular
      projectName: new FormControl('',[Validators.required, Validators.minLength(2)]),  // setting up form attributes and validating
      materialDesc: new FormControl('',[Validators.required, Validators.minLength(2)]),
      quantity: new FormControl('',[Validators.required, Validators.minLength(2)]),
      unitOfMeasure: new FormControl('',[Validators.required, Validators.minLength(2)])
  })

  let results = await this.apiService.ListProjectts();
  this.allProjects = results.items; 

  this.listMaterial();
  }

  // this.projectMaterialForm?.controls['projectName'].value
  async listMaterial() {
    let results = await this.apiService.ListMaterials({ProjectName: {eq: this.projectMaterialForm?.controls['projectName'].value}}); //
    this.allMaterial = results.items;
    console.log(this.allMaterial);
    //console.log("This is project name: " + this.projectMaterialForm?.controls['projectName'].value);
  }

  async createMaterial() {
    const newMaterial = {
      ProjectName: this.projectMaterialForm?.controls['projectName'].value,  // This field failing to bind
      MaterialDesc: this.projectMaterialForm?.controls['materialDesc'].value,
      Quantity: this.projectMaterialForm?.controls['quantity'].value,
      UnitOfMeasure: this.projectMaterialForm?.controls['unitOfMeasure'].value,
      Status: "Pending"
      //ProjectName: this.projectMaterialForm?.controls['projectName'].value
    }
  
    let result = await this.apiService.CreateMaterial(newMaterial); // calling the createProject method from apiService
  
    this.allMaterial.push(result); // pushing values form previous query to allprojects[] arraylist
    
    alert("Material Added!");
  }

 



  

  



 
  /*
  async getRequirement() {
    let result = await this.apiService.GetRequirements()
  } */

}
function ModelMaterialFilterInput(ModelMaterialFilterInput: any) {
  
}

