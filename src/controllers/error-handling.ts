'use strict';

import * as express from 'express';

import { ErrorHandling, ERROR_PATH_404 } from '../definitions/controllers';

import { Server } from '../server';

let server: Server = new Server();

let errorHandling: ErrorHandling = {

  get404: function (req: express.Request, res: express.Response, next: express.NextFunction) {

    return res.render(server.cwd() + ERROR_PATH_404);

  }

};

export = errorHandling;
