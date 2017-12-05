import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './_shared';

const appRoutes: Routes = [
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule?chunkName=user',
  },
  {
    path: 'app',
    loadChildren: './system/system.module#SystemModule?chunkName=system',
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule { }