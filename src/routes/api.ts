'use strict';

import * as express from 'express';

import { Server } from '../server';
import * as Controller from '../controllers/api';

let server: Server = new Server(),

  app: express.Application = server.getApp(),

  router: express.Router = express.Router();

export default function () {

  router

    .route('/projects')

    /**
     * @api {get} /projects Get projects of a specific type
     * @apiGroup API
     * @apiVersion 1.0.0
     * @apiName getProjects
     * @apiDescription Gets projects of a specific type
     * @apiSampleRequest http://localhost:80/api/projects?type=mobile
     */

    .get(Controller.getProjects);

  app.use('/api', router);

};
