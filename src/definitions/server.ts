'use strict';

import * as minimist from 'minimist';

export const MAPPINGS_PATH: string = <string>'/../src/app/scripts';
export const MODULES_PATH: string = <string>'/../node_modules';
export const SCRIPTS_PATH: string = <string>'/app/scripts';
export const STYLES_PATH: string = <string>'/app/styles';
export const VIEWS_PATH: string = <string>'/app/views';
export const IMAGES_PATH: string = <string>'/app/images';

export const LOCATIONS: string[] = <string[]>[
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
