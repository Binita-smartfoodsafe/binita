import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginPageService } from './login-page.service';
import {ColorPickerService, Rgba} from 'ngx-color-picker';
import { CommonService } from '../../../common/common.service';


@Component({
  selector: 'app-configuration',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers:[LoginPageService]
})
export class LoginPageComponent {

 loginCofigurationForm : FormGroup;
  loading: boolean = false;
  public themeColor = '#4099ff';
  @ViewChild('fileInput1') fileInput1: ElementRef;
  @ViewChild('fileInput2') fileInput2: ElementRef;
  constructor(private fb : FormBuilder,private LoginPageSrvc: LoginPageService ,private comonSrvc:CommonService) { 
    this.createForm();
  }
  
  createForm() {

  	this.loginCofigurationForm = this.fb.group({
  		themeColorValue : null,/*
      backgroungImage : ['', Validators.required],
  		logoImage : ['', Validators.required],*/
      backgroungImage :null,
      logoImage:null
  	})
  }
  onBackgroungImageChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.loginCofigurationForm.get('backgroungImage').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }
  onLogoImageChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.loginCofigurationForm.get('logoImage').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }
  onSubmit() {
    const formModel = this.loginCofigurationForm.value;
    this.loading = true;
  	var requestData={themeColor:this.themeColor,logoImg:this.loginCofigurationForm.value.logoImage,backgroundImg:this.loginCofigurationForm.value.backgroungImage};
    this.LoginPageSrvc.setLoginPageConfig(requestData).subscribe(
      (resData: any) => {
        this.loading = false;
        this.clearFile();
        this.comonSrvc.showSuccessMsg(resData.message);
    }, err => { 
      this.comonSrvc.showErrorMsg(err.message);
      //if (err.status === 401) {
        this.loading = false;
      //}
     
    });
  }
  clearFile() {
    this.loginCofigurationForm.get('logoImage').setValue(null);
    this.loginCofigurationForm.get('backgroungImage').setValue(null);
    this.fileInput1.nativeElement.value = '';
    this.fileInput2.nativeElement.value = '';
  }
}
