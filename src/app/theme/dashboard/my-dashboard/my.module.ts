import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my.component';
import {MyRoutingModule} from './my-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {SimpleNotificationsModule} from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    MyRoutingModule,
    SharedModule,
    ChartModule,
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [MyComponent],
  bootstrap: [MyComponent]
})
export class MyModule { }
