'use strict';

import {
  Component,
  Input,
  OnInit,
  ViewChild,
  HostListener
} from '@angular/core';

import { NgStyle } from '@angular/common';

@Component({

  'selector': 'skill',

  'templateUrl': 'views/components/skill.html',

  'styleUrls': [

    'styles/components/skill.component.css'

  ],

  'directives': [
    NgStyle
  ]

})

export class SkillComponent implements OnInit {

  @ViewChild('container') container;

  @Input() level: number = 0;
  @Input() type: string = '';

  private hasAnimated: boolean = false;
  private color: string = '#213f9a';
  private lvl: string = '0%';

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

  constructor (
    private window: Window,
    private document: Document) {

  }

  ngOnInit () {

    this
      .getElement()
      .getColorForType();

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {

    this
      .checkView();

  }

  private isElementInViewport (el: HTMLElement) {

    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (this.window.innerHeight || this.document.documentElement.clientHeight) &&
      rect.right <= (this.window.innerWidth || this.document.documentElement.clientWidth)
    );

  }

  private checkView (): SkillComponent {

    if (this.isElementInViewport(this.elem) && !this.hasAnimated) {

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

    if (this.type && this.type.length) {

      let type: string = this.type.toLowerCase(),

        color: string = this.colorMapping[type];

      if (color) {

        Object.assign(this, {

          'color': color,

          'lvl': '0%',

          'hasAnimated': false

        });

        this
          .checkView();

      }

    }

    return this;

  }

};
