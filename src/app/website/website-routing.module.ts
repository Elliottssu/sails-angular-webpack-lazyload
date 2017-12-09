import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsiteComponent } from '../website';


const websiteRoutes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule?chunkName=home',
        data: { preload: true }
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule?chunkName=about',
        data: { preload: true }
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
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

  ]
})
export class WebsiteRoutingModule { }