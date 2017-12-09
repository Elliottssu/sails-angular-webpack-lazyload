/**
 * 登录后校验，不允许进入登录页面
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilService } from '../util/util.service';

@Injectable()
export class AuthGuardAlreadyLogin implements CanActivate {
    constructor(private router: Router, private utilService: UtilService) {
    }

    //登录页面，如果检测到session，不用登录直接进入页面
    canActivate(): boolean {
        return true
        // return this.checkSession();
    }

    //检查session
    checkSession(): boolean {
        let user = this.utilService.getCookie('user') 
        if (user) {
            this.router.navigate(['/']);
            return false
        } else {
            return true
        }
    }

    
}

