'use strict';

import { bootstrap } from '@angular/platform-browser-dynamic';

import { CanActivateViaAssetsGuard } from './guards/assets.guards';

import { AppComponent } from './components/app.component';
import { AssetsService } from './services/assets.service';
import { appRouterProviders } from './app.routes';

let bootstrapper: Bootstrapper;

export class Bootstrapper {

  constructor () {

    if (!bootstrapper) {

      bootstrapper = this;

    } else {

      return bootstrapper;

    }

    return this;

  }

  public compile () {

    bootstrap(AppComponent, [
      {

        'provide': Window,

        'useValue': window

      }, {

        'provide': Document,

        'useValue': document

      },
      AssetsService,
      CanActivateViaAssetsGuard,
      appRouterProviders
    ]);

    return this;

  }

};
