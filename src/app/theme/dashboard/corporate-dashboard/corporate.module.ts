import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateComponent } from './corporate.component';
import {CorporateRoutingModule} from './corporate-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {SimpleNotificationsModule} from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    CorporateRoutingModule,
    SharedModule,
    ChartModule,
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [CorporateComponent],
  bootstrap: [CorporateComponent]
})
export class CorporateModule { }
