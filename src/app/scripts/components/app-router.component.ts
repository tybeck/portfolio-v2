'use strict';

import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';

import {
  ROUTER_DIRECTIVES,
  Router,
}  from '@angular/router';

import {
  RouterTransitionService
} from '../services/router-transition.service';

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
    RouterTransitionService
  ]

})

export class AppRouterComponent implements OnInit {

  constructor (
    private transition: RouterTransitionService,
    private router: Router,
    private el: ElementRef) {
  }

  ngOnInit () {

    this.transition.subscribe(this.el, this.router);

  }

};
