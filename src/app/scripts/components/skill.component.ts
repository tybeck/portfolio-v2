'use strict';

import {
  Component,
  Input,
  OnInit,
  ViewChild,
  HostListener
} from '@angular/core';

import { NgStyle } from '@angular/common';

import {
  HideUntilDirective
} from '../directives/hide-until.directive';

import {
  BoolEventEmitterService
} from '../services/bool-emitter.service';

import {
  Rect
} from '../definitions/generic';

let selector: string = <string>'skill';

@Component({

  'selector': selector,

  'templateUrl': 'views/components/skill.html',

  'styleUrls': [

    'styles/components/skill.component.css'

  ],

  'directives': [
    HideUntilDirective,
    NgStyle
  ],

  'providers': [
    BoolEventEmitterService
  ]

})

export class SkillComponent implements OnInit {

  @ViewChild('container') container;

  @Input() level: number = 0;
  @Input() type: string = '';

  private hasAnimated: boolean = false;
  private color: string = '#213f9a';
  private lvl: string = '0%';

  private classesAvailable: string = '';
  private classes: string[] = ['skill-component'];

  private elem: HTMLElement;

  private colorMapping: any = {

    'javascript': '#f4e46c',
    'html': '#ec622d',
    'css': '#6a528f',
    'java': '#bf8520',
    'php': '#6172a6',
    'actionscript': '#9b3c11',
    'shell': '#98e263',
    'typescript': '#35879b'

  };

  private subscription = null;

  constructor (
    private window: Window,
    private document: Document,
    private emitter: BoolEventEmitterService) {

  }

  ngOnInit () {

    let self: SkillComponent = <SkillComponent>this;

    this.classesAvailable = this
      .classes
      .join(' ');

    this
      .getElement()
      .getColorForType();

    this.subscription = this
      .emitter
      .stream
      .subscribe(function (response: boolean) {

        if (response) {

          setTimeout(() => {

            self
              .checkView
              .apply(self);

          }, 250);

        }

      });

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {

    this
      .checkView();

  }

  private isElementInViewport (el: HTMLElement): boolean {

    let rect: Rect = <Rect>el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (this.window.innerHeight || this.document.documentElement.clientHeight) &&
      rect.right <= (this.window.innerWidth || this.document.documentElement.clientWidth)
    );

  }

  private checkView (): SkillComponent {

    let isHidden: boolean = <boolean>false;

    if (this.elem && this.elem.parentNode) {

      let parentElem: HTMLElement = <HTMLElement>this.elem.parentNode,

        parentNodeName: string = <string>this.elem.parentNode.nodeName;

      if (parentNodeName) {

        parentNodeName = parentNodeName.toLowerCase();

        if (selector === parentNodeName) {

          let h: number = <number>parseInt(this.window
            .getComputedStyle(parentElem, null)
            .getPropertyValue('height'));

          if (!h) {

            isHidden = true;

          }

        }

      }

    }

    if (this.isElementInViewport(this.elem) && !this.hasAnimated && !isHidden) {

      Object.assign(this, {

        'lvl': (this.level.toString() + '%'),

        'hasAnimated': true

      });

    }

    return this;

  }

  private getElement (): SkillComponent {

    if (this.container && this.container.nativeElement) {

      this.elem = this.container.nativeElement;

    }

    return this;

  }

  private getColorForType (): SkillComponent {

    let self: SkillComponent = <SkillComponent>this;

    if (this.type && this.type.length) {

      let type: string = this.type.toLowerCase(),

        color: string = this.colorMapping[type];

      if (color) {

        this.classes.push(type.toLowerCase());

        Object.assign(this, {

          'color': color,

          'lvl': '0%',

          'hasAnimated': false,

          'classesAvailable': this.classes.join(' ')

        });

      }

      setTimeout(function () {

        self
          .checkView();

      }, 25);

    }

    return this;

  }

};
