'use strict';

import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { PortfolioComponent } from './components/pages/portfolio.component';
import { ClientsComponent } from './components/pages/clients.component';
import { ContactComponent } from './components/pages/contact.component';

const ROUTES: RouterConfig = [
  {

    'path': '',

    'redirectTo': '/home',

    'pathMatch': 'full'

  },
  {

    'path': 'home',

    'component': HomeComponent

  },
  {

    'path': 'about',

    'component': AboutComponent

  },
  {

    'path': 'portfolio',

    'component': PortfolioComponent

  },
  {

    'path': 'clients',

    'component': ClientsComponent

  },
  {

    'path': 'contact',

    'component': ContactComponent

  }
];

export const appRouterProviders = [

  provideRouter(ROUTES)

];
