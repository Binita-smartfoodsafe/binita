import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      status: false
    },
    children: [
      {

        path: 'corporate',
        loadChildren: './corporate-dashboard/corporate.module#CorporateModule'
        // loadChildren: './basic-login/basic-login.module#BasicLoginModule'
      },
      {
        path: 'plant',
        loadChildren: './plant-dashboard/plant.module#PlantModule'
      },
      {
        path: 'my',
        loadChildren: './my-dashboard/my.module#MyModule'
      },
       {
        path: 'summary',
        loadChildren: './summary/summary.module#SummaryModule'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
