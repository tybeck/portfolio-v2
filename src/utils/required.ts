'use strict';

import * as q from 'q';
import * as async from 'async';
import * as globby from 'globby';

function required (dir: string): q.Promise<Function[]> {

  let deferred = q.defer<Function[]>();

  require('globby')([

    dir + '/*',

    '!' + dir + '/**/*.js.map',

    '!' + dir + '/index.js'

  ])
    .then(function (paths: string[]) {

      let requiredArray: any[] = new Array();

      async.eachLimit(paths, 1, function (path: string, next: Function) {

        if (path.indexOf('.') !== -1) {

          let requiredItem: any = require(path);

          if (requiredItem && requiredItem.default) {

            requiredArray.push(requiredItem.default);

          }

        }

        return next();

      }, function () {

        deferred.resolve(requiredArray);

      });

    });

  return deferred.promise;

};

export default required;
