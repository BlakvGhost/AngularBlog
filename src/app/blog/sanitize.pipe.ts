import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}
 
  public transform(value: any): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }

}
