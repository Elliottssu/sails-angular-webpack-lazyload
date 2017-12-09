import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../website';


const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: '首页-后台管理系统' }
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class HomeRoutingModule { }