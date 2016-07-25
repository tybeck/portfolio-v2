'use strict';

import * as mongoose from 'mongoose';
import * as q from 'q';

export class Database {

  public connection: mongoose.Connection;

  constructor () {

    return this;

  }

  public create () {

    this.connection = mongoose.createConnection('mongodb://localhost/tyb');

    return this;

  }

  public registerEvents (): q.Promise<void> {

    let deferred = q.defer<void>();

    this.connection.on('error', function (err: any) {

      return deferred.reject(err);

    });

    this.connection.once('open', function () {

      return deferred.resolve();

    });

    return deferred.promise;

  }

  public setup (): q.Promise<void> {

    let deferred = q.defer<void>();

    this
      .create()
      .registerEvents()
        .then(function () {

          return deferred.resolve();

        }, function (err: any) {

          return deferred.reject(err);

        });

    return deferred.promise;

  }

};
