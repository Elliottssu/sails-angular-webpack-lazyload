import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardNotLogin } from '../_services'
import {
  SystemComponent,
  HomeComponent,
  CompositeComponent, CompositeAnalysisComponent,
} from '../system';

const systemRoutes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardNotLogin],
        data: { title: '首页' }
      },
     
      {
        path: 'composite',
        component: CompositeComponent,
        canActivate: [AuthGuardNotLogin],
        children: [
          { path: 'analysis', component: CompositeAnalysisComponent, data: { title: '综合分析' } },
          { path: '', redirectTo: 'analysis', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(systemRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardNotLogin
  ]
})
export class SystemRoutingModule { }