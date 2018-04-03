import {Component, ElementRef, OnInit,Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// import { RawMaterialsService } from '../../../service/raw-materials.service';
import { PlantService } from '../../../service/plant.service';
// import { SupplierService } from '../../../service/supplier.service';
// import { ProductService } from '../../../service/product.service';
// import { BrokerService } from '../../../service/broker.service';
// import { UploaddataService } from '../../../service/uploaddata.service';
// import {FileUploader} from 'ng2-file-upload';


// import  { Rawmaterial } from '../../../classes/rawmaterial';
import  { Plant } from '../../../classes/plant';
// import  { Supplier } from '../../../classes/supplier';
// import  { Broker } from '../../../classes/broker';
// import  { Product } from '../../../classes/product';
// import {Observable} from 'rxjs/Rx';


// import { RawMaterialService } from './raw-material.service';
import { CommonService } from '../../../common/common.service';
import { AuthService } from '../../../common/auth.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: [
    './raw-material.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ],
  // providers:[RawMaterialService]

})
export class RawmaterialComponent implements OnInit {
  dataForm : FormGroup;
  // plant : Plant;
  // rawmaterial: any = 'rawmaterials[]';
  // plantList = [];
  // createdDate : any = new Date();
  // createdBy : any = 'admin';
  // supplier : any = 'Supplier[]';
  // broker : any = 'Broker[]';
  // coo : any = '';
  // product : any = 'Product[]';
  // productCode : any = '';
  // variety : any = '';
  // approved : any = '';
  // kosher : any = '';
  // nonGMO : any = '';
  // po : any = '';
  // containerNo : any = '';
  // lotNo : any = '';
   @Input() plant=[];

  constructor(private fb : FormBuilder,
    // public suppliersservice:SupplierService,
    public plantservice:PlantService,
    // public productservice:ProductService,
    // public brokerservice:BrokerService,
  ) {}

  ngOnInit() {
    this.dataForm = this.fb.group({
      'plant' : ['', [Validators.required]],
      'createdDate' : ['', [Validators.required]],
      'createdBy' : ['', [Validators.required]],
      'suplier' : ['', [Validators.required]],
      'broker' : ['', [Validators.required]],
      'coo' : ['', [Validators.required]],
      'product' : ['', [Validators.required]],
      'productCode' : ['', [Validators.required]],
      'variety' : ['', [Validators.required]],
      'approved' : ['', [Validators.required]],
      'kosher' : ['', [Validators.required]],
      'nonGMO' : ['', [Validators.required]],
      'po' : ['', [Validators.required]],
      'containerNo' : ['', [Validators.required]],
      'lotNo' : ['', [Validators.required]]
    });
    this.plantservice.getplant().subscribe(responseplants=>this.plant=responseplants);
  }
  // getPlant () {
  //   this.rawMatService.getPlant().subscribe((response: any) => {
  //     console.log(this.plant);
  //     this.plantList = response.data;
  //     this.plantList.forEach(element => {
  //       element.label = element.name;
  //       element.value = element._id;
  //     });

  //   }, err => { 
  //     if (err.status === 401) {
  //     }
  //   });
  // }


  public changePlant (plant:Plant):void {
    console.log("hi",this.plant);
    this.plantservice.getplant().subscribe((response: any) => {
      console.log(response);
    });
  }

  
  // onRecordCreate() {
  //   console.log('this.dataForm.value',this.dataForm.value);
  //   console.log(this.plant);
  //   console.log(this.createdDate);
  //   console.log(this.createdBy);
  //   console.log(this.supplier);
  //   console.log(this.broker);
  //   console.log(this.coo);
  //   console.log(this.product);
  //   console.log(this.productCode);
  //   console.log(this.variety);
  //   console.log(this.approved);
  //   console.log(this.kosher);
  //   console.log(this.nonGMO);
  //   console.log(this.po);
  //   console.log(this.containerNo);
  //   console.log(this.lotNo);
  //   this.dataForm.reset();
  // };


  // public uploadFile(){
  //     let files=this.uploaddataservice.uploaddata('selectFile').files;
  //     let formData=new FormData();
  //     let file =files[0];
  //     formData.append('selectFile',file,file.name);
  //     this.uploaddataservice.uploaddata(formData)
  //     .subscribe(res=>this.dataLoader(res));
  //   }

  //    public loadsupplier():void {
  //    console.log(this.supplier)
  //     if(this.suppliersservice.get(this.supplier)){
  //       this.suppliersservice.view(this.supplier.value)
  //       .then(suppliers=>this.supplier=suppliers);
  //     }else{
  //       this.supplier=[];
  //   }
  // }  
  //    public loadbroker():void {
  //      console.log(this.broker)
  //       if(this.brokerservice.get(this.broker)){
  //         this.brokerservice.view(this.broker.value)
  //         .then(brokers=>this.broker=brokers);
  //       }else{
  //         this.broker=[];
  //     }
  // }
  //   public loadproduct():void {
  //    console.log(this.product)
  //     if(this.productservice.get(this.product)){
  //       this.productservice.view(this.product.value)
  //       .then(products=>this.product=products);
  //     }else{
  //       this.product=[];
  //   }
  // }    

}
