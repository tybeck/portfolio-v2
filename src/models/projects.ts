'use strict';

import * as mongoose from 'mongoose';

import { Database } from '../services/db';

import { IProject, IProjects } from './interfaces/projects';

import { SCHEMA } from './schema/projects';

import { Prototyping } from '../utils/prototyping';

import * as getFeatured from './schema/statics/projects/get-featured';
import * as getProjectsByName from './schema/statics/projects/get-projects-by-name';
import * as getProjectsByType from './schema/statics/projects/get-projects-by-type';

let db: Database = new Database(),

  connection: mongoose.Connection = db.getConnection();

let model = connection.model<IProject>('projects', SCHEMA),

  projects: Projects;

export class Projects implements IProjects {

  public model: any = model;

  public getFeatured;

  public getProjectsByName;

  public getProjectsByType;

  constructor () {

    if (!projects) {

      projects = this;

    } else {

      return projects;

    }

    return this;

  }

};

Prototyping(Projects, [
  getFeatured.default,
  getProjectsByName.default,
  getProjectsByType.default
], model);
