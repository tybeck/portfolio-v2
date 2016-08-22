'use strict';

import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';

import {
  Router,
}  from '@angular/router';

import {
  RouterTransitionService
} from '../../../services/router-transition.service';

@Component({

  'selector': 'hero-router',

  'templateUrl': 'views/components/pages/auxiliary/hero-router.html',

  'styleUrls': [

    'styles/outlets/hero/router.css'

  ],

  'providers': [
    RouterTransitionService
  ]

})

export class HeroRouterComponent implements OnInit {

  constructor (
    private transition: RouterTransitionService,
    private router: Router,
    private el: ElementRef) {
  }

  ngOnInit () {

    this.transition.subscribe(this.el, this.router);

  }

};
