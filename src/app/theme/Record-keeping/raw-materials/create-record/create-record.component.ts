import {Component, ElementRef, OnInit,Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import {FileUploader} from 'ng2-file-upload';
import { Http} from '@angular/http';
import { HttpEventType} from '@angular/common/http';


import { Router , ActivatedRoute} from '@angular/router';

import { RawMaterialService } from '../raw-material.service';
import { CommonService } from '../../../../common/common.service';
import { AuthService } from '../../../../common/auth.service';
import { LocationStrategy } from '@angular/common';
import * as _ from "lodash";
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: [
    './create-record.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss'
  ],
  providers:[RawMaterialService]

})
export class CreateRecordComponent implements OnInit {
  dataForm : FormGroup;
  rawmaterial: any = 'rawmaterials[]';
  createdDate : any = new Date();
  plantList = [];
  brokerList = [];
  supplierList = [];
  productList = [];
  createdBy : any = '';
  createdById : any = '';
  broker : any = '';
  coo : any = '';
  product : any = '';
  productCode : any = '';
  variety : any = '';
  isApproved : any = "false";
  kosher : any = 'false';
  nonGMO : any = 'false';
  organicValue : any = 'false';
  po : any = '';
  containerNo : any = '';
  lotNo : any = '';
  plant : any = '';
  supplier : any = '';
  selectedSupplier : any = '';
  selectedMaterial : any = '';
  materialGrpList = [];
  materialGrp='';
  materialList = [];
  material = '';

  constructor(
    private fb : FormBuilder,
    public rawMatService:RawMaterialService,
    public comonSrvc:CommonService,
    protected localStorage: AsyncLocalStorage,
    public router:Router,
  ) {}

  ngOnInit() {
    this.dataForm = this.fb.group({
      'plant' : ['', [Validators.required]],
      'suplier' : ['', [Validators.required]],
      'broker' : ['', [Validators.required]],
      'coo' : ['', [Validators.required]],
      'materialGrp' : [],
      'variety' : ['', [Validators.required]],
      'approved' : ['', [Validators.required]],
      'kosher' : ['', [Validators.required]],
      'nonGMO' : ['', [Validators.required]],
      'po' : ['', [Validators.required]],
      'containerNo' : ['', [Validators.required]],
      'lotNo' : ['', [Validators.required]],
      'organic' : ['', [Validators.required]],
      'material' : ['', [Validators.required]],

    });
    this.getPlant();
    this.localStorage.getItem('user').subscribe((user) => {
      console.log(user) // should be 'Henri'
      this.createdBy = user.user.username;
      this.createdById = user.user._id;

    });
  } 
  onRecordCreate() {
    let obj = {
      plant : this.plant,
      supplier : this.supplier,
      broker : this.broker,
      country : this.coo,
      po : this.po,
      containerNo : this.containerNo,
      lotNo : this.lotNo,
      variety : this.variety,
      rawMaterial : this.material
      // nonGmo : this.nonGMO,
      // createdBy : this.createdById,
      // isDelete : false
    }
    console.log('this.dataForm.value',obj);
    this.rawMatService.saveRecord(obj).subscribe((response: any) => {
      this.comonSrvc.showSuccessMsg(response.message);
      this.router.navigate(['/recordkeeping/raw-matrial/document-upload',response.data._id]).then(nav =>{

      });
    }, err => { 
      this.comonSrvc.showErrorMsg(err.message);
    });
    //this.dataForm.reset();
  };
  getPlant () {
    this.rawMatService.getPlant().subscribe((response: any) => {
      console.log(response);
      this.plantList = response.data;
      this.plantList.forEach(element => {
        element.label = element.name;
        element.value = element._id;
      });

    }, err => { 
      if (err.status === 401) {
      }
    });
  }
  
  public changePlant ():void {
    this.supplierList = [];
    if(this.plant != '')
      this.rawMatService.getSupplier(this.plant).subscribe((response: any) => {
        console.log(response);
        this.supplierList = response.data;
        this.supplierList.forEach(element => {
          element.label = element.name;
          element.value = element._id;
        });
      }, err => { 
        if (err.status === 401) {
        }
      });
  }


  public changeSupplier ():void {
    this.brokerList = [];
    if(this.supplier != ''){
      var obj = {
        plantId : this.plant,
        supplierId:this.supplier
      }
      this.selectedSupplier = _.find(this.supplierList,{"_id":this.supplier});
      this.selectedSupplier.address.forEach(element => {
        element.label = element.country;
        element.value = element.country;
      })
      this.rawMatService.getBroker(obj).subscribe((response: any) => {
        this.brokerList = response.data;
        this.brokerList.forEach(element => {
          element.label = element.name;
          element.value = element._id;
        });
      }, err => { 
        if (err.status === 401) {
        }
      });
    }
  }

  public changeBroker ():void {
    this.productList = [];
    if(this.supplier != ''){
     var obj = {
       plantId : this.plant,
       supplierId:this.supplier,
       brokerId:this.broker
     }
      this.rawMatService.getRawMatrialGroup(obj).subscribe((response: any) => {
        this.materialGrpList = response.data;
      }, err => { 
        if (err.status === 401) {
        }
      });
    }
  }
  public changeMaterialGroup ():void {
    if(this.materialGrp != ''){
      var obj = {
        plantId : this.plant,
        supplierId:this.supplier,
        brokerId:this.broker,
        matrialGrp:this.materialGrp
      }
       this.rawMatService.getRawMatrial(obj).subscribe((response: any) => {
         this.materialList = response.data;
         this.materialList.forEach(element => {
          element.label = element.name;
          element.value = element._id;
        });
       }, err => { 
         if (err.status === 401) {
         }
       });
    }
  }
  public changeMaterial ():void {
    if(this.material != ''){
      this.selectedMaterial = _.find(this.materialList,{"_id":this.material});
      this.nonGMO = (this.selectedMaterial.nonGmo) ? 'true' : 'false';
      this.organicValue = (this.selectedMaterial.organic) ? 'true' : 'false';
      this.isApproved = (this.selectedMaterial.isApproved) ? 'true' : 'false';
      this.kosher = (this.selectedMaterial.kosher) ? 'true' : 'false';
    }
  }

}