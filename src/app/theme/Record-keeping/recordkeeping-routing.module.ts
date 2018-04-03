import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Record Keeping',
      status: false
    },
    children: [
      {
        path : '',
        redirectTo : 'raw-matrial',
        pathMatch : 'full'
      },
      {
        path: 'raw-matrial',
        loadChildren: './raw-materials/raw-material.module#RawMaterialsModule'
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordKeepingRoutingModule { }
