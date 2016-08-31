'use strict';

import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';

import {
  Title
} from '@angular/platform-browser';

import {
  ROUTER_DIRECTIVES,
  Router,
  Event,
  NavigationEnd,
  NavigationStart
}  from '@angular/router';

import {
  RouterTransitionService
} from '../services/router-transition.service';

import {
  TITLES
} from '../definitions/config';

@Component({

  'selector': 'app-router',

  'templateUrl': 'views/components/app-router.html',

  'styleUrls': [

    'styles/components/app-router.component.css'

  ],

  'directives': [
    ROUTER_DIRECTIVES
  ],

  'providers': [
    RouterTransitionService,
    Title
  ]

})

export class AppRouterComponent implements OnInit {

  constructor (
    private titleService: Title,
    private transition: RouterTransitionService,
    private router: Router,
    private el: ElementRef,
    private wdw: Window) {
  }

  ngOnInit () {

    let self: AppRouterComponent = <AppRouterComponent>this;

    this
      .transition
      .subscribe(this.el, this.router);

    this
      .router
      .events
      .subscribe((event: Event) => {

        if (event instanceof NavigationStart) {

          self
            .wdw
            .scrollTo(0, 0);

        }

        if (event instanceof NavigationEnd) {

          if (event.url && TITLES[event.url]) {

            self
              .titleService
              .setTitle(TITLES[event.url]);

          }

        }

      });

  }

};
