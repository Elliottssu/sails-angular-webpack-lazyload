/**
 * 用户账号 后端api接口
 * 注意四种类型格式（示例）
 * 1. get请求不带参数
 * 2. get请求带参数 get(api,{params: params})
 * 3. post请求不带参数
 * 1. post请求带参数 post(api,params)
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiUserService {

	redirectUrl: string; //登录成功后跳转地址（验证登录时候有用，比如访问某页面没登录先跳登录，再跳到该页面）

	constructor(private http: HttpClient) { }

	//登录（post请求带参数）
	login(params: any) {
		return this.http.post('/api/users/login', params).map((res: any) => res);
	}

}