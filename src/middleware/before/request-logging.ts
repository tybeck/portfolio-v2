'use strict';

import * as express from 'express';
import * as winston from 'winston';

import { Server } from '../../server';

let server: Server = new Server(),

  app: express.Application = server.getApp();

export default function () {

  var expressWinston = require('express-winston');

  server
    .msg('Winston - Request Logging Enabled.');

  app.use(expressWinston.logger({

    'transports': [

      new winston.transports.File({

        'name': 'request-success',

        'filename': server.cwd() + '/logs/requests.log',

        'level': 'info',

        'handleExceptions': true,

        'json': true,

        'colorize': true

      })

    ],

    'expressFormat': true,

    'colorStatus': true

  }));

};
