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

  private doc: Document;

  constructor (
    window: Window,
    doc: Document,
    el: ElementRef) {

      this.el = <ElementRef>el;

      this.wdw = <Window>window;

      this.doc = <Document>doc;

      return this;

  }

  public handleSizing (): void {

    let ref: HTMLElement = <HTMLElement>this.el.nativeElement;

    Object.assign(ref.style, {

      'width': (this.wdw.innerWidth - this.getScrollBarWidth()) + 'px',

      'height': (this.wdw.innerHeight) + 'px'

    });

  }

  getScrollBarWidth (): number {

    var scrollDiv = this.doc.createElement('div');

    scrollDiv.classList.add('scrollbar-measure');

    this.doc.body.appendChild(scrollDiv);

    var scrollBarWidth = (scrollDiv.offsetWidth - scrollDiv.clientWidth);

    this.doc.body.removeChild(scrollDiv);

    return scrollBarWidth;

  }

  @HostListener('window:resize', ['$event'])
  onScroll(event: any) {

    this.handleSizing();

  }

  ngAfterViewInit () {

    this.handleSizing();

  }

};
