'use strict';

import * as express from 'express';

import { Server } from '../../server';

let server: Server = new Server(),

  app: express.Application = server.getApp();

export default function () {

  server
    .msg('Express - 404 Handling enabled.');

  app.use(function (req: express.Request, res: express.Response) {

    return res
      .status(404)
      .redirect('/404');

  });

};
