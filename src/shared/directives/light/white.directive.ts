import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWhite]'
})
export class WhiteDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.background = "white"
    element.nativeElement.style.border = "2px solid black"
    element.nativeElement.style.color = "black"
  }

}
