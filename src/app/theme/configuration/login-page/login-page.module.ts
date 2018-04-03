import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import {LoginPageRoutingModule} from './login-page-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ColorPickerModule} from 'ngx-color-picker';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    SharedModule,
    ColorPickerModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [LoginPageComponent]
})
export class LoginPageModule { }
