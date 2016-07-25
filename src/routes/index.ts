'use strict';

import * as q from 'q';
import * as _ from 'lodash';

import * as required from '../utils/required';

export default function () {

  let deferred = q.defer<void>();

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
