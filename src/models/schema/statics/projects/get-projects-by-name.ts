'use strict';

import * as q from 'q';
import * as mongoose from 'mongoose';
import * as _ from 'lodash';

import { IProject } from '../../../interfaces/projects';

function getProjectsByName (names: string): q.Promise<IProject[]> {

  let deferred: q.Deferred<IProject[]> = q.defer<IProject[]>(),

    query: any = {

      '$or': []

    },

    aNames: string[] = names.split(',');

  _.each(aNames, function (name: string) {

    var regex = new RegExp(['^', name, '$'].join(''), 'i');

    query.$or.push({

    	'name': regex

    });

  });

  this
		.find(query)
		.exec(function (err: Error, projects: IProject[]) {

			if (!err && projects && projects.length) {

				var sortedProjects: IProject[] = [];

				_.each(aNames, function (projectName: string) {

					_.each(projects, function (project: IProject) {

						var resultProjectName = project.name;

						if (projectName.toLowerCase() === resultProjectName.toLowerCase()) {

							sortedProjects.push(project);

							return false;

						}

					});

				});

				return deferred.resolve(sortedProjects);

			}

		});

  return deferred.promise;

};

export default getProjectsByName;
