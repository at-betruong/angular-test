import { Directive, ElementRef, HostListener, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  el: ElementRef;
  color: any;
  @HostListener('appFavorite', ['$event']) myHandler(event) { this.color = event; }

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    console.log(targetElement);
    // if (this.el.nativeElement.contains(event.target.id)) {
    //   console.log(event.target.style);
    //   console.log(this.color);
    // } else {
    //   console.log('hi');
    // }
  }
}
