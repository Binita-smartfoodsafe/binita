import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu.component';
import {UserMenuRoutingModule} from './user-menu-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ColorPickerModule} from 'ngx-color-picker';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TreeviewModule } from 'ngx-treeview';


@NgModule({
  imports: [
    CommonModule,
    UserMenuRoutingModule,
    SharedModule,
    ColorPickerModule,FormsModule,ReactiveFormsModule,
    TreeviewModule.forRoot(),
    
  ],
  declarations: [UserMenuComponent]
})
export class UserMenuModule { }
