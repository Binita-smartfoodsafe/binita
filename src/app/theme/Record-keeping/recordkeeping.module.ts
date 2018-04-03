import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecordKeepingRoutingModule} from './recordkeeping-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RecordKeepingRoutingModule,
  ],
  declarations: []
})
export class RecordKeepingModule { }
