/**
 * 未登录校验，不允许进入首页
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { UtilService } from '../util/util.service';
import { ApiUserService } from '../api/api-user.service';

@Injectable()
export class AuthGuardNotLogin implements CanActivate, CanLoad {
    constructor(private router: Router, private utilService: UtilService, private apiUserService: ApiUserService) {

    }

    //添加守卫防止没登录访问,没登录跳到登录界面, 前后端同时验证session true代表通过 //因为有了canload 暂时不使用
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url = state.url;
        return true
        // return this.checkLogin(url);
    }

    //根据前端sessiion判断登录状态
    checkLogin(url: string): boolean {
        let user = this.utilService.getCookie('user')
        if (user) {
            this.utilService.putCookie('user', user) //在原来基础上再重置cookie过期时间
            return true
        } else {
            this.apiUserService.redirectUrl = url; //保留上一个页面的URL，登录完后可直接跳转
            this.router.navigate(['/user/login'])
            return false
        }
    }

    //保护对特性模块的未授权加载 就是没登录不加载首页   检查登录状态用作控制异步模块加载 (lazyload)
    canLoad(route: Route): boolean {
        let url = `/${route.path}`; //  此路由官方暂不支持全路由只能到模块路由
        return this.checkLogin(url)
    }




}

