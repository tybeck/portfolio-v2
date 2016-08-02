/// <reference path="../../../typings/browser/index.d.ts" />

'use strict';

import {
  Bootstrapper
} from './app.bootstrapper';

let bootstrapper: Bootstrapper = new Bootstrapper();

(function () {

  bootstrapper
    .compile();

})();
