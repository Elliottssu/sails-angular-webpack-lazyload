/*
 * 保留小数点 leave 代表小数点后几位
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toFixed' })
export class ToFixedDataPipe implements PipeTransform {
    constructor() { }

    transform(data, leave) {
        if (typeof data == 'number') {
            return data.toFixed(leave)
        }
    }
}