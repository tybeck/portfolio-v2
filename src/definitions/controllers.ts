'use strict';

import * as express from 'express';

export interface Projects {

  getProject: express.RequestHandler;

}

export interface API {

  getProjects: express.RequestHandler;

}
