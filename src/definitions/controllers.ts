'use strict';

import * as express from 'express';

export const ERROR_PATH_404: string = '/app/views/error-handling/404.html';
export const INDEX_PATH: string = '/app/index.html';

export interface ErrorHandling {

  get404: express.RequestHandler;

}

export interface Projects {

  getProject: express.RequestHandler;

}

export interface API {

  getProjects: express.RequestHandler;

}

export interface Content {

  getSpa: express.RequestHandler;

}
