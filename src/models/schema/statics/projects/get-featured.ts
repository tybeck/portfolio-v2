'use strict';

import * as q from 'q';
import * as mongoose from 'mongoose';

import { IProject } from '../../../interfaces/projects';

function getFeatured (): q.Promise<IProject[]> {

  let deferred: q.Deferred<IProject[]> = q.defer<IProject[]>();

  this
    .find({

      'featured': true

    })
    .exec(function (err: Error, projects: IProject[]) {

      if (!err && projects) {

        return deferred.resolve(projects);

      }

      return deferred.resolve([]);

    });

  return deferred.promise;

};

export default getFeatured;
