import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyComponent} from './my.component';

const routes: Routes = [
  {
    path: '',
    component: MyComponent,
    data: {
      title: 'My',
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
export class MyRoutingModule { }
