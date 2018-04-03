import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CorporateComponent} from './corporate.component';

const routes: Routes = [
  {
    path: '',
    component: CorporateComponent,
    data: {
      title: 'Corporate',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateRoutingModule { }
