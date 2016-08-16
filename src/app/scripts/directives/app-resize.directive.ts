'use strict';

import {
  Directive,
  ElementRef,
  AfterViewInit,
  HostListener
} from '@angular/core';

@Directive({

  'selector': '[appResize]'

})

export class AppResizeDirective implements AfterViewInit {

  private el: ElementRef;

  private wdw: Window;

  constructor (
    window: Window,
    el: ElementRef) {

      this.el = <ElementRef>el;

      this.wdw = <Window>window;

      return this;

  }

  public handleSizing () {

    let ref: HTMLElement = <HTMLElement>this.el.nativeElement;

    Object.assign(ref.style, {

      'width': (this.wdw.innerWidth) + 'px',

      'height': (this.wdw.innerHeight) + 'px'

    });

  }

  @HostListener('window:resize', ['$event'])
  onScroll(event: any) {

    this.handleSizing();

  }

  ngAfterViewInit () {

    this.handleSizing();

  }

};
