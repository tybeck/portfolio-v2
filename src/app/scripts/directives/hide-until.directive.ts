'use strict';

import * as _ from 'lodash';

import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

import {
  Rect,
  BoundingHeight
} from '../definitions/generic';

import {
  BoolEventEmitterService
} from '../services/bool-emitter.service';

@Directive({

  'selector': '[hideUntil]',

  'providers': [
    BoolEventEmitterService
  ]

})

export class HideUntilDirective implements OnChanges {

  @Input('hideUntil') hideUntil: boolean;

  private rect: Rect;
  private boundingHeight: BoundingHeight;
  private el: ElementRef;

  private emitter: BoolEventEmitterService;

  constructor (
    emitter: BoolEventEmitterService,
    window: Window,
    el: ElementRef) {

      this.el = <ElementRef>el;

      this.emitter = <BoolEventEmitterService>emitter;

      return this;

  }

  public getElement (): HTMLElement {

    return this.el.nativeElement || null;

  }

  public getElementProperty (el: HTMLElement, key: string): number {

    let property: number = <number>parseInt(window
      .getComputedStyle(el, null)
      .getPropertyValue(key));

    return property;

  }

  public setBoundingHeight (): BoundingHeight {

    let el: HTMLElement = <HTMLElement>this.getElement(),

      boundingHeight: BoundingHeight = null,

      paddingBottom: number = <number>this.getElementProperty(el, 'padding-bottom'),

      paddingTop: number = <number>this.getElementProperty(el, 'padding-top'),

      marginBottom: number = <number>this.getElementProperty(el, 'margin-bottom'),

      marginTop: number = <number>this.getElementProperty(el, 'margin-top'),

      borderBottom: number = <number>this.getElementProperty(el, 'border-bottom-width'),

      borderTop: number = <number>this.getElementProperty(el, 'border-bottom-height');

    boundingHeight = {

      'paddingTopHeight': paddingTop || 0,

      'paddingBottomHeight': paddingBottom || 0,

      'marginBottomHeight': marginBottom || 0,

      'marginTopHeight': marginTop || 0,

      'borderBottomWidth': borderBottom || 0,

      'borderTopWidth': borderTop || 0

    };

    return boundingHeight;

  }

  public setRectAndBounding (): Promise<boolean> {

    let element: HTMLElement = <HTMLElement>this.getElement(),

      self: HideUntilDirective = <HideUntilDirective>this,

      p: Promise<boolean> = <Promise<boolean>>
        new Promise(function (resolve: Function, reject: Function) {

          setTimeout(function () {

            self.rect = element.getBoundingClientRect();

            self.boundingHeight = self.setBoundingHeight();

            return resolve(true);

          }, 25);

        });

    return p;

  }

  public getRect (): Rect {

    return this.rect;

  }

  public getBoundingHeight(): BoundingHeight {

    return this.boundingHeight;

  }

  public hide (): HideUntilDirective {

    let element: HTMLElement = <HTMLElement>this.getElement();

    Object.assign(element.style, {

      'height': '0',

      'margin-bottom': '0',

      'margin-top': '0',

      'border-bottom-width': '0',

      'border-bottom-height': '0',

      'padding-bottom': '0',

      'padding-top': '0',

      'overflow': 'hidden'

    });

    this
      .emitter
      .stream
      .emit(false);

    return this;

  }

  public show (): HideUntilDirective {

    let element: HTMLElement = <HTMLElement>this.getElement(),

      rect: Rect = <Rect>this.getRect(),

      boundingHeight: BoundingHeight = <BoundingHeight>this.getBoundingHeight();

    Object.assign(element.style, {

      'height': rect.height + 'px',

      'margin-bottom': boundingHeight.marginBottomHeight + 'px',

      'margin-top': boundingHeight.marginTopHeight + 'px',

      'padding-bottom': boundingHeight.paddingBottomHeight + 'px',

      'padding-top': boundingHeight.paddingTopHeight + 'px',

      'border-bottom-width': boundingHeight.borderBottomWidth + 'px',

      'border-top-width': boundingHeight.borderTopWidth + 'px'

    });

    this
      .emitter
      .stream
      .emit(true);

    return this;

  }

  ngOnChanges (changes: any) {

    if (changes && changes.hideUntil) {

      let hideUntil: boolean = <boolean>changes.hideUntil.currentValue,

        self: HideUntilDirective = <HideUntilDirective>this;

      if (!hideUntil) {

        this
          .setRectAndBounding()
            .then(function (ready: boolean) {

              if (ready) {

                self
                  .hide();

              }

            });

      } else {

        this
          .show();

      }

    }

  }

};
