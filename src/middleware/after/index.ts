'use strict';

import * as q from 'q';
import * as _ from 'lodash';

import * as required from '../../utils/required';
import { Server } from '../../server';

function after () {

  let deferred = q.defer<void>(),

    server: Server = new Server();

  server
    .msg('Attemping to apply middlewares after routes...');

  required
    .default(__dirname)
      .then(function (items: Function[]) {

        _.each(items, function (fn: Function) {

          fn();

        });

        deferred.resolve();

      });

  return deferred.promise;

};

export default after;
