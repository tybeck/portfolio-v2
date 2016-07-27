'use strict';

import * as q from 'q';
import * as mongoose from 'mongoose';

import { IProject } from '../../../interfaces/projects';

function getProjectsByType (type: string): q.Promise<IProject[]> {

  let deferred: q.Deferred<IProject[]> = q.defer<IProject[]>();

  this
		.find({

      'type': type

    })
		.exec(function (err: Error, projects: IProject[]) {

			if (!err && projects && projects.length) {

				return deferred.resolve(projects);

			} else {

        return deferred.resolve([]);

      }

		});

  return deferred.promise;

};

export default getProjectsByType;
