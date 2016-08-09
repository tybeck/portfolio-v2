'use strict';

import {
  Component,
  OnInit
} from '@angular/core';

import {
  LoadingService
} from '../services/loading.service';

@Component({

  'selector': 'loading',

  'templateUrl': 'views/components/loading.html',

  'styleUrls': [

    'styles/components/loading.component.css'

  ],

  'providers': [
    LoadingService
  ]

})

export class LoadingComponent implements OnInit {

  public loading: boolean = <boolean>false;

  constructor (
    private loadingService: LoadingService) {

  }

  ngOnInit () {

    let self: LoadingComponent = <LoadingComponent>this;

    this
      .loadingService
      .isLoadingChanged
        .subscribe(function (loading: boolean) {

          self.loading = <boolean>loading;

        });

  }

};
