'use strict';

import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './components/app.component';
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

      appRouterProviders

    ]);

    return this;

  }

};
