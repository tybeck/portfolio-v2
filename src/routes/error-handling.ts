'use strict';

import * as express from 'express';

import { Server } from '../server';
import * as Controller from '../controllers/error-handling';

let server: Server = new Server(),

  app: express.Application = server.getApp(),

  router: express.Router = express.Router();

export default function () {

  router

    .route('/404')

    /**
     * @api {get} /404 Return 404 page becasue of not being found
     * @apiGroup API
     * @apiVersion 1.0.0
     * @apiName get404
     * @apiDescription Return 404 page becasue of not being found
     * @apiSampleRequest http://localhost:80/404
     */

    .get(Controller.get404);

  app.use('/', router);

};
