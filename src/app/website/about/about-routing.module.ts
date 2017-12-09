import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../../website';


const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { title: '关于-后台管理系统' }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AboutRoutingModule { }