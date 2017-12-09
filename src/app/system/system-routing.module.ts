import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardAlreadyLogin } from '../_services'
import { SystemComponent, LoginComponent, RegisterComponent } from '../system';


const websiteRoutes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      { path: 'login', component: LoginComponent, canActivate: [AuthGuardAlreadyLogin], data: { title: '登录-后台管理系统' } },
      { path: 'register', component: RegisterComponent, data: { title: '注册-后台管理系统' } },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(websiteRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardAlreadyLogin,
  ]
})
export class SystemRoutingModule { }