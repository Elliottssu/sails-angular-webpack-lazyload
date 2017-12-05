import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent, UserLoginComponent } from '../user';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    UserRoutingModule,
  ],
  declarations: [
    UserComponent,
    UserLoginComponent,
  ]
})
export class UserModule { }