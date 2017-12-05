/**
 * 组件传值（父子组件间通讯） 带next的 和 asObservable
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
    public categories: Subject<Array<any>> = new BehaviorSubject<Array<any>>([]);
    public slideposition: Subject<string> = new BehaviorSubject<string>('initial');
    public time: number = 0;

    public smsCount: Subject<object> = new BehaviorSubject<object>({ count: 60, state: true, msg: `获取验证码` }); //倒计时信息
    public titleSubjetc: Subject<any> = new Subject(); //网页title
    public echartsSelectData: Subject<any> = new Subject(); //网页title

    public params: object = {};//商品搜索的条件，用于从商品搜索传到综合分析和评论探索

    constructor() {

    }

    /**
     * 获取行业列表
     */
    public getCategories(): Observable<Array<any>> {
        return this.categories.asObservable();
    }

    /**
     * 滑动全部行业菜单
     * @param direction 菜单滑动方向
     */
    public categorySlideFn(direction: string, width) {
        let position: string;
        if (direction === 'left') {
            this.time++;
            position = (-width - 2) * this.time + 'px';
        }
        if (direction === 'right') {
            this.time--;
            position = (-width - 2) * this.time + 'px';
        }
        this.slideposition.next(position);
    }
    /**
     * 复原滑动的位置
     */
    public clearSlide(): void {
        this.time = 0;
        this.slideposition.next('0');
    }

    /**
     * 行业菜单滑动的位置
     */
    public getSlidePosition(): Observable<string> {
        return this.slideposition.asObservable();
    }


    /**
     * 开始验证码倒计时
     */
    public putCountDown(): void {
        let countInfo = {
            count: 60,
            state: true,
            msg: `60 秒后重发`
        }

        let timeCount = setInterval(_ => {
            countInfo.count--;
            if (countInfo.count < 0) {
                countInfo.state = true;
                countInfo.msg = '重新发送';
                clearInterval(timeCount)
            } else {
                countInfo.state = false;
                countInfo.msg = `${countInfo.count} 秒后重发`;
            }
            this.smsCount.next(countInfo);
        }, 1000, 60)
    }

    /**
     * 返回验证码倒计时具体信息
     */
    public getCountDown(): Observable<object> {
        return this.smsCount.asObservable();
    }


    /**
     * 设置详情页的title
     * @param title 
     */
    public setDetailName(title: string) {
        this.titleSubjetc.next(title);
    }
    public getDetailName(): Observable<string> {
        return this.titleSubjetc.asObservable();
    }

    /**
     * echarts折线图hover数据
     * @param time 传入时间参数 
     */
    public putEchartsSelect(time: string) {
        this.echartsSelectData.next(time);
    }
    public getEchartsSelect(): Observable<string> {
        return this.echartsSelectData.asObservable();
    }

}