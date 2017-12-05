import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardAlreadyLogin } from '../_services'
import { UserComponent, UserLoginComponent } from '../user';


const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'login', component: UserLoginComponent, canLoad: [AuthGuardAlreadyLogin], data: { title: '登录' } },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardAlreadyLogin,
  ]
})
export class UserRoutingModule { }