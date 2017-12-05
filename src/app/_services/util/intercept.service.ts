/**
 * http拦截器，统一处理后台code状态接口
 */
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

import { Router } from "@angular/router";
import { UtilService } from './util.service';

@Injectable()
export class InterceptService implements HttpInterceptor {

    constructor(private router: Router, private utilService: UtilService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { //req为request next为response
        return next.handle(req)
            .map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && event.status == 200) { //保证正确的code
                    //处理未登陆
                    if (event.body.code == -3) {
                        this.utilService.removeCookie('user')
                        this.router.navigate(['/user/login']);  //如果发现后台没有登录则跳转到登录页面
                    } else {
                        let user = this.utilService.getCookie('user')  //有请求则在原来基础上再重置cookie过期时间
                        this.utilService.putCookie('user', user)
                    }
                }
                return event;
            })
            .catch((err: any, caught) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 500) {
                        console.info('err.error =', err.error, ';');
                    }
                    return Observable.throw(err);
                }
            });
    }
}