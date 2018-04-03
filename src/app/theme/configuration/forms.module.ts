import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigurationRoutingModule} from './configuration-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class ConfigurationModule { }
