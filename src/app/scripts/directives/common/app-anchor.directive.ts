'use strict';

import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({

  'selector': '[commonAnchor]'

})

export class CommonAnchorSmoothDirective {

  @Input() href: string = '';

  private el: ElementRef;

  private wdw: Window;

  constructor (
    window: Window,
    el: ElementRef) {

      this.el = <ElementRef>el;

      this.wdw = <Window>window;

      return this;

  }

  @HostListener('click', ['$event']) onClick (ev: any) {

    let id: string = <string>this.href.replace('#', ''),

      anchor: HTMLElement = <HTMLElement>document.getElementById(id);

    if (anchor) {

      anchor.scrollIntoView(true);

    }

    ev.preventDefault();

    return false;

  }

};
