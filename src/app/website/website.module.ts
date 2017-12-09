import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';
import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from '../website';

@NgModule({
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ],
  declarations: [
    WebsiteComponent,
  ]
})
export class WebsiteModule { }