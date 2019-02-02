import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

  constructor(private el : ElementRef) { }
  @Input ('appInputformat') format;
  @HostListener ('focus') OnFocus()  {
    console.log("on Focus");
  }
  @HostListener ('blur') OnBlur()  {
    console.log("on Blur");
    let value : string = this.el.nativeElement.value;
    if(this.format=='lowercase')
      this.el.nativeElement.value = value.toLocaleLowerCase();
    else
      this.el.nativeElement.value = value.toLocaleUpperCase();
  }

}
