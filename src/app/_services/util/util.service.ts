/**
 * 工具类 公共服务（如常用数据转换，background生成背景）
 */
import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';


@Injectable()
export class UtilService {
    constructor(private cookieService: CookieService) { }

    /**
     * 存储有时间期限的cookie
     * @param key cookie名称
     * @param data cookie内容，这里是个对象
     * @param hours 设置过期时间，单位小时（默认24小时）
     */
    public putCookie(key: string, data: object, hours: number = 24): void {
        let expireDate = new Date();
        expireDate.setHours(expireDate.getHours() + hours)
        this.cookieService.putObject(key, data, { 'expires': expireDate })
    }

    /**
     * 删除指定cookie
     * @param key cookie名称
     */
    public removeCookie(key: string): void {
        this.cookieService.remove(key)
    }

    /**
     * 获取指定cookie(对象)
     * @param key cookie名称
     */
    public getCookie(key: string): object {
        return this.cookieService.getObject(key)
    }

}