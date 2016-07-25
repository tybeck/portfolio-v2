'use strict';

import * as q from 'q';
import * as path from 'path';
import * as fs from 'fs';
import * as async from 'async';

import { Projects } from '../definitions/server';

let find: any = require('findit');

let projects: Projects = {

  /**
   * Get directories based on past given in return all top level
   * directories within parent.
   * @method getDirs
   * @type Function
   */

  getDirs: function (dir: string) {

    let finder = find(dir),

  		dirs: string[] = [],

  		skipped: boolean = false,

  		deferred: q.Deferred<void> = q.defer<void>();

  },

  setupProjects: function () {

    console.log('blah');

  }

};

export = projects;
