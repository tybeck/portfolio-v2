'use strict';

import * as minimist from 'minimist';

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
