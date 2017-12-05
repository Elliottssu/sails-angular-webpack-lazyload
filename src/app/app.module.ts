import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

//第三方插件
import { NgZorroAntdModule, NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';
import { CookieService } from 'angular2-cookie/core';

//service
import {
  ApiUserService,
  AuthGuardAlreadyLogin, AuthGuardNotLogin,
  SharedService, UtilService, InterceptService
} from './_services';

import { NotFoundComponent} from './_shared';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, //http拦截器
      useClass: InterceptService,
      multi: true,
    },
    {
      provide: NZ_MESSAGE_CONFIG, //消息弹窗默认配置
      useValue: { nzDuration: 3000 }
    },
    ApiUserService,
    AuthGuardAlreadyLogin,
    AuthGuardNotLogin,
    SharedService,
    UtilService,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) { }
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
