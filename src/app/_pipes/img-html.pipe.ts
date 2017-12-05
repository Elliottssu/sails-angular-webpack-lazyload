/*
 * 图片的渲染
*/
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'imgHtml' })
export class ImgHtmlPipe implements PipeTransform{
    constructor(private sanitizer: DomSanitizer) { }

    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${style})`); //识别图片
    }
}