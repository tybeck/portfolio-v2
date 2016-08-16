'use strict';

import { Component } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { AppHeaderComponent } from './app-header.component';
import { AppRouterComponent } from './app-router.component';

import { AppResizeDirective } from '../directives/app-resize.directive';

@Component({

  'selector': 'app',

  'templateUrl': 'views/components/app.html',

  'directives': [
    LoadingComponent,
    AppHeaderComponent,
    AppRouterComponent,
    AppResizeDirective
  ],

  'styleUrls': [

    'styles/app/components/app.component.css'

  ]

})

export class AppComponent {

};
