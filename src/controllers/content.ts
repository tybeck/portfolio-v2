'use strict';

import * as express from 'express';

import { Content, INDEX_PATH } from '../definitions/controllers';

import { Server } from '../server';

let server: Server = new Server();

let contentHandling: Content = {

  getSpa: function (req: express.Request, res: express.Response, next: express.NextFunction) {

    return res.render(server.cwd() + INDEX_PATH);

  }

};

export = contentHandling;
