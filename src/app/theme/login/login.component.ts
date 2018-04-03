import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { LoginService } from './login.service';
import { CommonService } from '../../common/common.service';
import { AuthService } from '../../common/auth.service';
import { LocationStrategy } from '@angular/common';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { GLOBAL_PROPERTIES } from './../../common/common.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  companyId: string;
  logoUrl: any;
  backgroundImgUrl: any;

  constructor(private _dataService: DataService, private _router: Router, private fb: FormBuilder, private loginSrvc: LoginService, private comonSrvc: CommonService, private locationStrategy: LocationStrategy, protected localStorage: AsyncLocalStorage) {
    var absUrl = (<any>this.locationStrategy)._platformLocation.location.href;
    var splittedArray = absUrl.split(':')[0].split('/');
    this.companyId = splittedArray[0];
    console.log('this.companyId', this.companyId);
  }

  ngOnInit() {
    //this.logoUrl = "http://localhost/FS_Resource/images/Logo-small-bottom.png";
    this.onFetchConfig(this.companyId);
    this.loginForm = this.fb.group({
      'username': ['', [Validators.required, Validators.minLength(5)]],
      'password': ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onFetchConfig(companyId) {
    this.loginSrvc.fetchConfig(companyId).subscribe(
      (resData: any) => {
        console.log('resData  ', resData)
        this.logoUrl = GLOBAL_PROPERTIES.BASE_API_URL + resData.data[0].logoImg.substr(2);
        this.backgroundImgUrl = resData.data[0].backgroundImg ? GLOBAL_PROPERTIES.BASE_API_URL + resData.data[0].backgroundImg.substr(2) : "";
      }, err => {
        if (err.status === 401) {
        }

      });
  };

  onSubmit() {
    this.loginSrvc.verifyUser(this.loginForm.value).subscribe(
      (resData: any) => {
        console.log('res', resData);
        let user = resData.data;

        this.localStorage.setItem('user', user).subscribe(() => { });
        this.comonSrvc.showSuccessMsg(resData.message);
        this._router.navigate(['/configuration']);
      }, err => {
        if (err.status === 401) {
          this.comonSrvc.showErrorMsg(err.message);
        } else {
          this.comonSrvc.showErrorMsg(err.message);
        }

      });
  };

}
