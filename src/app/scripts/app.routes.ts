'use strict';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { PortfolioComponent } from './components/pages/portfolio.component';
import { ClientsComponent } from './components/pages/clients.component';
import { ContactComponent } from './components/pages/contact.component';

import { AppHeroHomeComponent } from './components/pages/aux/app-hero-home.component';

import { CanActivateViaAssetsGuard } from './guards/assets.guards';

const GUARDS: any[] = <any[]>[
  CanActivateViaAssetsGuard
];

let appRoutes: Routes = <Routes>[
  {

    'path': '',

    'redirectTo': '/home',

    'pathMatch': 'full'

  },
  {

    'path': 'home',

    'children': [

      {

        'path': '',

        'component': HomeComponent

      },
      {

        'path': '',

        'component': AppHeroHomeComponent,

        'outlet': 'hero'

      }

    ]

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

appRoutes.forEach(function (route: any) {

  if (route && route.path) {

    route.canActivate = GUARDS;

  }

});

export const ROUTING = RouterModule.forRoot(appRoutes);
