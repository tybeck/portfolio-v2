'use strict';

import * as express from 'express';

interface API {

  getProjects: express.RequestHandler;

}

let api: API = {

  getProjects: function (req: express.Request, res: express.Response, next: express.NextFunction) {

    console.log(req, res);

  }

};

export = api;
