import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlantComponent} from './plant.component';

const routes: Routes = [
  {
    path: '',
    component: PlantComponent,
    // data: {
    //   title: 'Corporate',
    //   icon: 'icon-home',
    //   caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    //   status: false
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
