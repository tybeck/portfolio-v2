'use strict';

module.exports = function (grunt) {

  var _ = require('lodash'),

    chalk = require('chalk');

  var pkg = {

    'grunt': null,

    msg: function (msg) {

      console.log(chalk.bgWhite(chalk.blue('## ') + chalk.black('Tyler+Beck') +

        chalk.blue(' ## ') + chalk.black(msg)));

      return this;

    },

    /**
      * Load grunt tasks automatically
      * Time how long tasks take. Can help when optimizing build times
      * @method init
      * @type Function
    */

    init: function (grunt) {

      this.grunt = grunt;

      require('es6-promise')
        .polyfill();

      require('jit-grunt')(this.grunt, {

        'bump': 'grunt-bump',

        'bump-only': 'grunt-bump'

      });

      require('time-grunt')(this.grunt);

      return this;

    },

    /**
      * Configure grunt plugins
      * @method config
      * @type Function
    */

    config: function () {

      var grunt = this.grunt;

      grunt.initConfig({

        'pkg': grunt.file.readJSON('package.json'),

        'paths' : require('./grunt/paths'),

        'clean' : require('./grunt/clean'),

        'tslint': require('./grunt/tslint'),

        'ts': require('./grunt/ts'),

        'copy': require('./grunt/copy'),

        'watch': require('./grunt/watch'),

        'pug': require('./grunt/pug'),

        'compass': require('./grunt/compass'),

        'postcss': require('./grunt/postcss'),

        'bump': require('./grunt/bump')

      });

      return this;

    },

    /**
      * @method getOptions
      * Get command-line argument options or use defaults
    */

    getOptions : function(task) {

      var options = task.options({

        'environment': this.grunt.option('environment') || 'local'

      });

      return options;

    },

    /**
      * @method tasks
      * Build tasks for build, test, serve, and running the application.
    */

    tasks: function () {

      var self = this,

        grunt = self.grunt,

        environment = grunt.option('environment') || 'development',

        app = require('config')
          .get('application');

      self
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

      grunt.registerTask('serve', function () {

        grunt.task.run([

          'logs',

          'clean:projects',

          'build',

          'copy:projects',

          'watch'

        ]);

      });

      grunt.registerTask('build', function () {

        grunt.task.run([

          'buildTemplates',

          'buildTypeScript',

          'buildJavaScript:no',

          'buildStyles',

          'buildAssets'

        ]);

      });

      grunt.registerTask('logs', 'Creates empty log files', function () {

         grunt.file.write('www/logs/errors.log', '');

         grunt.file.write('www/logs/requests.log', '');

      });

      grunt.registerTask('buildStyles', function () {

        grunt.task.run([

          'clean:styles',

          'compass:server',

          'postcss'

        ]);

      });

      grunt.registerTask('buildAssets', function () {

        grunt.task.run([

          'copy:images',

          'copy:fonts'

        ]);

      });

      grunt.registerTask('buildTemplates', function () {

        grunt.task.run([

          'clean:pug',

          'pug'

        ]);

      });

      grunt.registerTask('buildJavaScript', function (clean) {

        var tasks = [];

        if (clean !== 'no') {

          tasks.push('clean:jsWebAppUncompiled');

        }

        tasks.push('copy:js');

        grunt.task.run(tasks);

      });

      grunt.registerTask('buildTypeScript', function () {

        grunt.task.run([

          'buildTypeScriptAppServer',

          'buildTypeScriptWebApp'

        ]);

      });

      grunt.registerTask('buildTypeScriptAppServer', function () {

        grunt.task.run([

          'tslint:checkAppServer',

          'clean:jsAppServerCompiled',

          'copy:config',

          'ts:compileAppServer',

          'clean:jsBaseDirs'

        ]);

      });

      grunt.registerTask('buildTypeScriptWebApp', function () {

        grunt.task.run([

          'tslint:checkWebApp',

          'clean:jsWebApp',

          'ts:compileWebApp'

        ]);

      });

      grunt.registerTask('makeRelease', function () {

        var msg = grunt.option('m');

        if (msg) {

          grunt.config.merge({

            'bump': {

              'options': {

                'commitMessage': msg +  ' - Release v%VERSION%'

              }

            }

          });

        }

        grunt.task.run([

          'bump-only',

          'build',

          'bump-commit'

        ]);

      });

      return self;

    }

  };

  pkg
    .init(grunt)
    .config()
    .tasks();

};
