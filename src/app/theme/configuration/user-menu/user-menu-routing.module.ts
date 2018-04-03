import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserMenuComponent} from './user-menu.component';

const routes: Routes = [
  {
    path: '',
    component: UserMenuComponent,
    data: {
      title: 'Form Select',
      icon: 'icon-shortcode',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form select',
      status: true
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMenuRoutingModule { }
