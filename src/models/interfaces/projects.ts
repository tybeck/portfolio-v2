'use strict';

import * as mongoose from 'mongoose';

export interface IProject extends mongoose.Document {

  'name': string;
  'logoLabel': string;
  'skills': string[];
  'description': string;
  'link': string;
  'backdrop': string;
  'view': string;
  'zoom': string;
  'carousel': string;
  'carouselView': string;

}

export interface IProjects {

  getFeatured?(): void;

  getProjectsByName?(): void;

  getProjectsByType?(): void;

}
