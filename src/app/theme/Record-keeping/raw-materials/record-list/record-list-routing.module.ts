import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecordListComponent} from './record-list.component';


const routes: Routes = [
  {
    path: '',
    component: RecordListComponent,
  },
  {
    path: 'create',
    loadChildren: '../create-record/create-record.module#CreateRecordModule'
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes),
  
  ],
  exports: [RouterModule]
})
export class RecordListRoutingModule { 
}

