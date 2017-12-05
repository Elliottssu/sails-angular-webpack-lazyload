import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgSlimScrollModule } from 'ngx-slimscroll';

//pipes
import { ImgHtmlPipe, ToFixedDataPipe } from '../_pipes';

import { SystemRoutingModule } from './system-routing.module';
import {
  SystemComponent,
  HomeComponent,
  CompositeComponent, CompositeAnalysisComponent,
} from '../system';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SystemRoutingModule,
    NgZorroAntdModule,
    NgSlimScrollModule,
  ],
  declarations: [
    ImgHtmlPipe,
    ToFixedDataPipe,
    SystemComponent,
    CompositeComponent,
    CompositeAnalysisComponent,
    
    HomeComponent,
    
  ],
})
export class SystemModule { }