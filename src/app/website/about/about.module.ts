import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../_shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from '../../website';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }