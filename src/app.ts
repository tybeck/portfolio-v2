'use strict';

import * as http from 'http';

import { Server } from './server';
import * as time from './utils/current-time';

let server: Server = new Server();

server
  .ascii()
  .database()
    .then(function () {

      server
        .msg('Mongo - Database connection successful!')
        .configure()
        .beforeMiddleware()
          .then(function () {

            server
              .routes()
                .then(function () {

                  server
                    .afterMiddleware()
                      .then(function () {

                        server
                          .start()
                            .then(function (instance: http.Server) {

                              let host: string = instance.address().address,

                                port: number = instance.address().port;

                              if (host === '::') {

                                host = 'localhost';

                              }

                              server
                                .msg('Portfolio - Started web server at' + time.default())
                                .msg('Portfolio - Running on http://' + host + ':' + port);

                            });

                      });

                });

          });

    }, function () {

      server
        .msg('Mongo - Database connection failed!')
        .msg('Mongo - Collections not usable!');

      return process.exit(0);

    });
