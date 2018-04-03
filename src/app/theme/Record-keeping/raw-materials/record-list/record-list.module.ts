import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordListComponent } from './record-list.component';
import {RecordListRoutingModule} from './record-list-routing.module'
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RecordListRoutingModule,
    NgxDatatableModule,
    TagInputModule,
    FormsModule
  ],
  declarations: [RecordListComponent],
  bootstrap:[RecordListComponent]
})
export class RecordListModule { }
