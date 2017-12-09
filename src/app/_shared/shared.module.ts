import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Plugs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgSlimScrollModule } from 'ngx-slimscroll';

//Pipes
import { ImgHtmlPipe } from '../_pipes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        NgSlimScrollModule,
    ],
    declarations: [   
        ImgHtmlPipe, 
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        NgSlimScrollModule,
        ImgHtmlPipe,
    ],
})

export class SharedModule {

}