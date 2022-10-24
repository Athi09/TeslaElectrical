import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup | undefined;
  allProjects: any = [];
  user: User | undefined;

  constructor(private formBuilder: FormBuilder, //injecting dependencies that we will nedd in this class
              private apiService: APIService) { }

  ngOnInit(): void {

    this.projectForm = this.formBuilder.group({ // formBuilder allows us to build forms in Angular
      projectName: new FormControl('',[Validators.required, Validators.minLength(2)]), // setting up form attributes with validations
      projectCode: new FormControl('',[Validators.required, Validators.minLength(2)]),
      siteManager: new FormControl('',[Validators.required, Validators.minLength(2)])
  })

  }

  async createProject() {
    const newProject = {
      ProjectName: this.projectForm?.controls['projectName'].value, // data binding from html form to ts file, basically passing values for mutation
      ProjectCode: this.projectForm?.controls['projectCode'].value,
      SiteManager: this.projectForm?.controls['siteManager'].value
    }
  
    let result = await this.apiService.CreateProjectt(newProject); // calling the createProject method from apiService
  
    this.allProjects.push(result); // pushing values form previous query to allprojects[] arraylist
    
    alert("project created");
    
    //debugger;
  }

  
  

}
