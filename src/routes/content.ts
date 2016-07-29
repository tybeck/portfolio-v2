'use strict';

import * as express from 'express';
import * as _ from 'lodash';

import { Server } from '../server';
import * as Controller from '../controllers/content';

import { LOCATIONS } from '../definitions/server';

let server: Server = new Server(),

  app: express.Application = server.getApp(),

  router: express.Router = express.Router();

export default function () {

  _.each(LOCATIONS, function (location: string) {

    router

      .route(location)

      /**
       * @api {get} / Get's our main content page
       * @apiGroup API
       * @apiVersion 1.0.0
       * @apiName getSpa
       * @apiDescription Get's our main content page
       * @apiSampleRequest http://localhost:80/
       */

      .get(Controller.getSpa);

  });

  app.use('/', router);

};
