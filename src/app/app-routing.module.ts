import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuardNotLogin, SelectivePreloadingStrategyService } from './_services'
import { NotFoundComponent } from './_shared';

const appRoutes: Routes = [
  {
    path: 'system',
    canLoad: [AuthGuardNotLogin],
    loadChildren: './system/system.module#SystemModule?chunkName=system',
  },
  {
    path: 'website',
    loadChildren: './website/website.module#WebsiteModule?chunkName=website',
  },
  { path: '', redirectTo: 'website', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStrategyService }), //自定义预加载
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardNotLogin,
    SelectivePreloadingStrategyService
  ]
})
export class AppRoutingModule { }