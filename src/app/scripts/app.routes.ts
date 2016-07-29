'use strict';

import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './components/home.component';

const ROUTES: RouterConfig = [
  {

    'path': '',

    'redirectTo': '/home',

    'pathMatch': 'full'

  },
  {

    'path': 'home',

    'component': HomeComponent

  }
];

export const appRouterProviders = [

  provideRouter(ROUTES)

];
