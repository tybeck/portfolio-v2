'use strict';

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({

  'selector': 'app',

  'templateUrl': 'views/components/app.html',

  'directives': [
    ROUTER_DIRECTIVES
  ],

  'providers': [

    {

      'provide': Window,

      'useValue': window

    }, {

      'provide': Document,

      'useValue': document

    }

  ]

})

export class AppComponent {

};
