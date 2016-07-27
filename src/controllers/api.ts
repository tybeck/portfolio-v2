'use strict';

import * as express from 'express';

import { Projects } from '../models/projects';

import { API } from '../definitions/controllers';

import { IProject } from '../models/interfaces/projects';

let projects: Projects = new Projects();

let api: API = {

  getProjects: function (req: express.Request, res: express.Response, next: express.NextFunction) {

    let names: string = req.query.names || null,

      featured: boolean = req.query.featured ? true : false,

      type: string = req.query.type || null,

      method: string;

    let data: string = null;

    if (names && names.length) {

      method = 'getProjectsByName';

      data = names;

    } else if (type && type.length) {

      method = 'getProjectsByType';

      data = type;

    } else if (featured) {

      method = 'getFeatured';

    }

    if (projects && projects[method]) {

      projects[method](data)
        .then(function (projects: IProject[]) {

          console.log('projects', projects);

        });

    }

  }

};

export = api;
