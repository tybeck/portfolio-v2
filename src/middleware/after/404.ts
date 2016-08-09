'use strict';

import * as express from 'express';
import * as fs from 'fs';

import { Server } from '../../server';

let server: Server = new Server(),

  app: express.Application = server.getApp();

export default function () {

  server
    .msg('Express - 404 Handling enabled.');

  app.use(function (req: express.Request, res: express.Response, next: Function) {

    let path: string = <string>(server.cwd() + req.path),

      basename: string = <string>path.split(/[\\/]/).pop(),

      pos: number = <number>basename.lastIndexOf('.'),

      hasExtension: boolean = false;

    if (basename !== '' && pos > 1) {

      hasExtension = true;

    }

    fs.stat(path, function (ef: Error, statf: fs.Stats) {

      if (ef) {

        if (hasExtension) {

          res
            .status(404);

          return next();

        } else {

          return res
            .status(404)
            .redirect('/404');

        }

      }


    });

  });

};
