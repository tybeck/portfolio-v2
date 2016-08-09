'use strict';

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { LoadingComponent } from './loading.component';
import { AppHeaderComponent } from './app-header.component';

@Component({

  'selector': 'app',

  'templateUrl': 'views/components/app.html',

  'directives': [
    ROUTER_DIRECTIVES,
    LoadingComponent,
    AppHeaderComponent
  ]

})

export class AppComponent {

};
