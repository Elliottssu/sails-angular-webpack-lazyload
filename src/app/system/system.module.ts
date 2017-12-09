import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent, LoginComponent, RegisterComponent } from '../system';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  declarations: [
    SystemComponent,
    LoginComponent, 
    RegisterComponent
  ]
})
export class SystemModule { }