import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Raw material',
      status: false
    },
    children: [
      {
        path: '',
        loadChildren: './record-list/record-list.module#RecordListModule'
      },
      {
        path: 'create',
        loadChildren: './create-record/create-record.module#CreateRecordModule'
      },
      {
        path: 'document-upload/:id',
        loadChildren: './document-upload/document-upload.module#DocumentUploadModule'
      },      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawMaterialsRoutingModule { }
