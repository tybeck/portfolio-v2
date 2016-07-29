'use strict';

import * as minimist from 'minimist';

export const MODULES_PATH: string = '/../node_modules';
export const SCRIPTS_PATH: string = '/app/scripts';
export const STYLES_PATH: string = '/app/styles';
export const VIEWS_PATH: string = '/app/views';

export const LOCATIONS: string[] = [
  '/',
  '/home',
  '/about',
  '/portfolio',
  '/clients',
  '/contact'
];

export interface EnvironmentParsedArgs extends minimist.ParsedArgs {

  env: string;

}

export interface Projects extends Object {

  getDirs: Function;

  setupProjects: Function;

  buildProject: Function;

  getProject: Function;

};

export class Configuration extends Object {

  developmentPort: number;

  productionPort: number;

}
