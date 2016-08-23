'use strict';

import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';

import {
  LoadingService
} from '../services/loading.service';

@Component({

  'selector': 'app-header',

  'templateUrl': 'views/components/app-header.html',

  'styleUrls': [

    'styles/components/app-header.component.css'

  ],

  'providers': [
    LoadingService
  ]

})

export class AppHeaderComponent implements OnInit {

  constructor (
    private el: ElementRef,
    private loadingService: LoadingService) {
  }

  ngOnInit () {

    let ref: HTMLElement = <HTMLElement>this.el.nativeElement,

      self: AppHeaderComponent = <AppHeaderComponent>this;

    this
      .loadingService
      .isLoadingChanged
      .subscribe((loading: boolean) => {

        ref.classList[loading ? 'add' : 'remove']('loading');

      });

  }

};
