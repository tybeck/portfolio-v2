'use strict';

import * as express from 'express';
import * as winston from 'winston';

import { Server } from '../../server';

let server: Server = new Server(),

  app: express.Application = server.getApp();

export default function () {

  var expressWinston = require('express-winston');

  server
    .msg('Winston - Error Logging Enabled.');

  app.use(expressWinston.errorLogger({

    'transports': [

      new winston.transports.File({

        'name': 'request-error',

        'filename': 'logs/errors.log',

        'handleExceptions': true,

        'json': true,

        'colorize': true

      })

    ],

    'expressFormat': true,

    'colorStatus': true

  }));

};
