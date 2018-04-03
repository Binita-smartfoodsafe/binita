import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Configuration Components',
      status: false
    },
    children: [
      {
        path : '',
        redirectTo : 'login-page',
        pathMatch : 'full'
      },
      {
        path: 'login-page',
        loadChildren: './login-page/login-page.module#LoginPageModule'
      },
      {
        path: 'user-menu',
        loadChildren: './user-menu/user-menu.module#UserMenuModule'
      }/*,
      {
        path : '**',
        redirectTo : 'login-page'
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
