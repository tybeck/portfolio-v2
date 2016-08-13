'use strict';

import { Component } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { AppHeaderComponent } from './app-header.component';
import { AppRouterComponent } from './app-router.component';

@Component({

  'selector': 'app',

  'templateUrl': 'views/components/app.html',

  'directives': [
    LoadingComponent,
    AppHeaderComponent,
    AppRouterComponent
  ]

})

export class AppComponent {

};
