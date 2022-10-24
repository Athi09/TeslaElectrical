import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { APIService } from 'src/app/API.service';
import { DialogSiteComponent } from '../dialog-site/dialog-site.component';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-site-confirm',
  templateUrl: './site-confirm.component.html',
  styleUrls: ['./site-confirm.component.css']
})
export class SiteConfirmComponent implements OnInit {
  allorders: any = [];
  allProjects: any = [];
  projectMaterialForm: FormGroup | undefined;
  
  displayedColumns: string[] = ["Project Name:", "Material Description", "Quantity", "Unit of Measure"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) sort!: MatSort;

            // injecting the apiService since it is a dependent in this class
  constructor(private apiService: APIService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {

    this.projectMaterialForm = this.formBuilder.group({ // formBuilder allows us to build forms in Angular
      projectName: new FormControl('',[Validators.required, Validators.minLength(2)]), 
      filter: new FormControl('',[Validators.required, Validators.minLength(2)]),
    })

    this.listMaterial();
    this.listProjects();
    this.listPendingMaterial();
  }


  async listMaterial() {
    let result = await this.apiService.ListMaterials({ProjectName: {eq: this.projectMaterialForm?.controls['projectName'].value}})
    this.allorders = result.items;
    //this.dataSource = new MatTableDataSource(result);
  }

  async listPendingMaterial() {
    let result = await this.apiService.ListMaterials({Status: {eq: this.projectMaterialForm?.controls['filter'].value}})
    this.allorders = result.items;
    //this.dataSource = new MatTableDataSource(result);
  }

  async listProjects() {
    let result = await this.apiService.ListProjectts();
    this.allProjects = result.items;
  }

  /*
  async onUpdateProjects() {
    let result = await this.apiService.onu();
    this.allProjects = result.items;
  } */

  openDialog(material: any) {
    this.dialog.open(DialogSiteComponent, {
      width: '30%',
      data: material
      
    });
    console.log(material);
  }
}

