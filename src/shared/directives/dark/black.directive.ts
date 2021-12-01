import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlack]'
})
export class BlackDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.background = "black"
    element.nativeElement.style.border = "2px solid white"
    element.nativeElement.style.color = "white"
  }

}
