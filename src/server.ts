/// <reference path="_all.d.ts" />

/**
  * Primary Application for Tyler Beck's Portfolio
  * @author: Tyler Beck
  * @version: 2.x.x
*/

'use strict';

import * as ejs from 'ejs';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import * as chalk from 'chalk';
import * as config from 'config';
import * as minimist from 'minimist';
import * as q from 'q';
import * as http from 'http';

import { Database } from './services/db';
import * as before from './middleware/before';
import * as after from './middleware/after';
import * as routes from './routes';

import {
  Configuration,
  EnvironmentParsedArgs,
  MAPPINGS_PATH,
  MODULES_PATH,
  SCRIPTS_PATH,
  STYLES_PATH,
  VIEWS_PATH,
  IMAGES_PATH
} from './definitions/server';

let server: Server;

export class Server {

  public app: express.Application;

  public db: Database;

  public dir: string = __dirname;

  constructor () {

    if (!server) {

      server = this;

    } else {

      return server;

    }

    return this;

  }

  public cwd (): string {

    return this.dir;

  }

  /**
   * Message Chaining with Chalk
   * @method msg
   * @type Function
   */

  public msg (msg: string): Server {

    console.log(chalk.bgWhite(chalk.blue('## ') + chalk.black('Tyler+Beck') +

      chalk.blue(' ## ') + chalk.black(msg)));

    return this;

  }

  public ascii (): Server {

    this
      .msg('              ,\'##\':              ')
      .msg('          `############`          ')
      .msg('         @##@,      ,@##@`        ')
      .msg('       ###;            ;###       ')
      .msg('      @#@                ##@      ')
      .msg('     @#:                  ,#@     ')
      .msg('    @#. +######@+.         `#@    ')
      .msg('   @#, @############@#++### .#@   ')
      .msg('   #@  ##@    ,#@#########@  @#   ')
      .msg('  @#   ##        @##\'####`    #@  ')
      .msg('  #\'   @##+@:    ##@          :#  ')
      .msg(' ##     #####   @##.+\'\'\',      #@ ')
      .msg(' #@      ,;.    ##@ \'\'\'\'\'\',    @# ')
      .msg(' #,            \'##;\':,,\'\'\'\',   .# ')
      .msg('.#     :##+    ###   ,+  \'\'\'    #,')
      .msg(';#    ;####   ,###  \'\'\'  \'\'\'    #\'')
      .msg('+#    ##@     @##  \'\'\'`  \'\'\'    ##')
      .msg('+#    ##.    \'##@ ;\'\'\'   \'\'+    ##')
      .msg(';#    ##+   .###  \'\'\'\';+\'\'\'     #\'')
      .msg('.#    @##@\'@###. .\'\'\'\'\'\'+`      #,')
      .msg(' #:    @######`  +\'\' ``:+\'     ,# ')
      .msg(' #@     .###.    \'\'+   +\'\'\'    @# ')
      .msg(' ##        +\'\'\' +\'\'`    \'\'\'    #@ ')
      .msg('  #\'      \'\'\'\'\'\'\'\'+     \'\'\'   ;#  ')
      .msg('  @#     \'\'+  .\'\'\'      \'\'+   #@  ')
      .msg('   #@    \'\'\'.,\'\'\';++. ,\'\'\';  @#   ')
      .msg('   ##;    \'\'\'\'\'\';,\'\'\'\'\'\'\'\'  ,#@   ')
      .msg('    @#:    \'\'\'\'    \'\'\'\'\'+  .#@    ')
      .msg('     @#;                  :#@     ')
      .msg('      @#@                @#@      ')
      .msg('       ###\'            \'###       ')
      .msg('         @##@:      :@##@         ')
      .msg('           ############           ')
      .msg('              .;++;.              ');

    return this;

  }

  /**
   * Configure our express application
   * @method configure
   * @type Function
   */

  public configure (): Server {

    this.app = express();

    this.statics();

    this.app.use(bodyParser.json());

    this.app.use(cors());

    this.app.set('json spaces', 0);

    this.app.engine('.html', ejs.renderFile);

    this.msg('Express - Configuration completed.');

    return this;

  }

  public statics (): void {

    this
      .stat(this.cwd() + '/www/')
      .stat('/src/app/scripts', this.cwd() + MAPPINGS_PATH)
      .stat('/images', this.cwd() + IMAGES_PATH)
      .stat('/modules', this.cwd() + MODULES_PATH)
      .stat('/scripts', this.cwd() + SCRIPTS_PATH)
      .stat('/styles', this.cwd() + STYLES_PATH)
      .stat('/views', this.cwd() + VIEWS_PATH);

  }

  public stat (pathx: string, pathy?: string): Server {

    if (pathy && pathy.length) {

      this.app.use(pathx, express.static(pathy));

    } else {

      this.app.use(express.static(pathx));

    }

    return this;

  }

  public database (): q.Promise<void> {

    let deferred: q.Deferred<void> = q.defer<void>();

    this.db = new Database();

    this.db
      .setup()
        .then(function () {

          return deferred.resolve();

        }, function (err: any) {

          return deferred.reject(err);

        });

    return deferred.promise;

  }

  public beforeMiddleware (): q.Promise<void> {

    let deferred: q.Deferred<void> = q.defer<void>(),

      self: Server = this;

    before
      .default()
        .then(function () {

          self
            .msg('Middlewares applied before routes.');

          return deferred.resolve();

        });

    return deferred.promise;

  }

  public afterMiddleware (): q.Promise<void> {

    let deferred: q.Deferred<void> = q.defer<void>(),

      self: Server = this;

    after
      .default()
        .then(function () {

          self
            .msg('Middlewares applied after routes.');

          return deferred.resolve();

        });

    return deferred.promise;

  }

  public routes (): q.Promise<void> {

    let deferred: q.Deferred<void> = q.defer<void>(),

      self: Server = this;

    routes
      .default()
        .then(function () {

          self
            .msg('Express - Routes have been applied.');

          return deferred.resolve();

        });

    return deferred.promise;

  }

  /**
   * Return the application server
   * @method getApp
   * @type Function
   */

  public getApp (): express.Application {

    return this.app;

  }

  /**
   * Return the application express server
   * @method getExpressApp
   * @type Function
   */

  public getExpressApp () {

    return express;

  }

  public getPort (): number {

    var cfg: Configuration = config.get('application') as Configuration,

      options = minimist<EnvironmentParsedArgs>(process.argv.slice(2)),

      environment: string = options.env || 'development';

    return (environment === 'development') ?

      cfg.developmentPort :

      cfg.productionPort;

  }

  /**
   * Start our application express server
   * @method start
   * @type Function
   */

  public start (): q.Promise<http.Server> {

    let port: number = this.getPort(),

      deferred: q.Deferred<http.Server> = q.defer<http.Server>(),

      instance: http.Server;

    instance = this.app.listen(port, function () {

      return deferred.resolve(instance);

    });

    return deferred.promise;

  }

};
