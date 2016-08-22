'use strict';

import {
  Injectable,
  ElementRef
} from '@angular/core';

import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd
}  from '@angular/router';

@Injectable()
export class RouterTransitionService {

  subscribe (el: ElementRef, router: Router) {

    let self: RouterTransitionService = <RouterTransitionService>this;

    router
      .events
      .subscribe(function (event: Event) {

          let ref: HTMLElement = <HTMLElement>el.nativeElement,

              children: HTMLCollection = <HTMLCollection>ref.children;

          if (event instanceof NavigationStart) {

              self.state(children, 'none');

          } else if (event instanceof NavigationEnd) {

              self.state(children, 'block');

          }

      });

  }

  state (children: HTMLCollection, display: string) {

    for (var l = 0; l < children.length; l++) {

      let item: HTMLElement = <HTMLElement>children.item(l);

      item.style.display = display;

      if (display === 'none') {

        item.style.opacity = '0';

      } else {

        setTimeout(function () {

          item.style.opacity = '1';

        }, 50);

      }

    }

  }

};