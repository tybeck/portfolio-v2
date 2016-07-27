'use strict';

import * as q from 'q';
import * as path from 'path';
import * as fs from 'fs';
import * as async from 'async';
import * as chalk from 'chalk';
import * as _ from 'lodash';
import * as express from 'express';

import { Server } from '../server';
import * as client from './redis';

import { Projects } from '../definitions/server';

let find: any = require('findit'),

  server: Server = new Server(),

  app: express.Application;

let projects: Projects = {

  /**
   * Get project via name
   * @method getProject
   * @type Function
   */

  getProject: function (name: string): q.Promise<string> {

    let deferred: q.Deferred<string> = q.defer<string>();

    if (name && name.length) {

      client.get('projects', function (err: any, data: any) {

        if (!err && data) {

    			data = JSON.parse(data);

    			for (let key in data) {

            if (data.hasOwnProperty(key)) {

              let project: any = data[key].project;

      				if (project && project.name === name) {

      					if (project.index) {

                  return deferred.resolve(project.index);

      					} else {

      						return deferred.resolve(null);

      					}

      				}

            }

    			}

          return deferred.resolve(null);

    		} else {

          deferred.resolve(null);

        }

      });

    } else {

      deferred.reject(null);

    }

    return deferred.promise;

  },

  /**
   * Get directories based on past given in return all top level
   * directories within parent.
   * @method getDirs
   * @type Function
   */

  getDirs: function (dir: string): q.Promise<string[]> {

    let finder = find(dir),

  		dirs: string[] = [],

  		skipped: boolean = false,

  		deferred: q.Deferred<string[]> = q.defer<string[]>();

    finder.on('directory', function (directory: string) {

      directory = directory.replace(/\\/g, '/');

      dir = dir.replace(/\\/g, '/');

  		if (skipped) {

  			let _dir: string = directory.split(dir)[1];

  			if (_dir.lastIndexOf('/') === 0) {

  				dirs.push(_dir.replace(/\//g, ''));

  			}

  		}

  		skipped = true;

    });

    finder.on('end', function () {

  		return deferred.resolve(dirs);

  	});

    return deferred.promise;

  },

  /**
   * Build project (routes, assets, etc.) based off of it's project json file
   * @method buildProject
   * @type Function
   */

  buildProject: function (project: any) {

    server
      .msg('Building ' + chalk.blue('project ') + project.name + '...');

    _.each(project.assets, function (asset: any) {

      app.use(asset.web, express.static(path.join(server.cwd(), asset.server)));

    });

    if (project.mountIndexAt) {

      app.use(project.mountIndexAt, express.static(path.join(server.cwd(),

        'projects/' + project.name, project.index)));

    }

    // if(project.hook && project.hook.length) {
    //
    // require('./app/projects/' + project.name + '/' +
    //
    // project.hook).apply(self);
    //
    // }

  },

  /**
   * Setup projects based on their projects.json file
   * @method setupProjects
   * @type Function
   */

  setupProjects: function (): q.Promise<any[]> {

    app = server.getApp();

    let deferred: q.Deferred<any[]> = q.defer<any[]>(),

      dir: string = (server.cwd() + '/projects'),

      projects: any[] = [],

      self: Projects = this;

    server
      .msg('Setting up ' + chalk.blue('projects...'));

    this
      .getDirs(dir)
        .then(function (dirs: string[]) {

          async.each(dirs, function (name: string, next: Function) {

            let root: string = (dir + '/' + name),

              info: string = (root + '/project.json');

            fs.stat(root, function (e: Error, stat: fs.Stats) {

              if (stat && stat.isDirectory()) {

                fs.stat(info, function (ef: Error, statf: fs.Stats) {

                  if (statf && statf.isFile()) {

                    fs.readFile(info, 'utf8', function (efs: Error, data: Buffer) {

                      if (!efs && data) {

                        let json: string = data.toString();

                        projects.push(JSON.parse(json));

                      }

                      return next();

                    });

                  } else {

                    return next();

                  }

                });

              } else {

                return next();

              }

            });

          }, function () {

            client.set('projects', JSON.stringify(projects));

            _.each(projects, function (data: any) {

              if (data && data.project) {

                let project: any = data.project;

                self.buildProject(project);

              }

            });

            return deferred.resolve();

      		});

        });

    return deferred.promise;

  }

};

export = projects;
