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

  public dots: String = <String>'';
  public forward: boolean = <boolean>true;

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

          if (self.loading) {

            self.loop();

          }

        });

  }

  loop () {

    let self: LoadingComponent = <LoadingComponent>this;

    if (this.loading) {

      if (this.dots.length === 3) {

        this.forward = false;

      } else if (!this.dots.length) {

        this.forward = true;

      }

      if (this.forward) {

        this.dots += '.';

      } else {

        this.dots = this.dots.slice(1, this.dots.length);

      }

      setTimeout(() => {

        self
          .loop
          .apply(this);

      }, 150);

    }

  }

};
