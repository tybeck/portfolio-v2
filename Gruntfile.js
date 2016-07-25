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

          'build',

          'watch'

        ]);

      });

      grunt.registerTask('build', function () {

        grunt.task.run([

          'buildJavaScript'

        ]);

      });

      grunt.registerTask('buildJavaScript', function (target) {

        grunt.task.run([

          'clean:js',

          'copy:config',

          'tslintJavaScript',

          'compileJavaScript',

          'clean:jsBaseDirs'

        ]);

      });

      grunt.registerTask('tslintJavaScript', function (target) {

        grunt.task.run([

          'tslint:checkAppServer',

          'tslint:checkWebApp'

        ]);

      });

      grunt.registerTask('compileJavaScript', function () {

        grunt.task.run([

          'ts:compileAppServer',

          'ts:compileWebApp'

        ]);

      });

      grunt.registerTask('makeRelease', function () {

        var msg = grunt.option('m');

        if(msg) {

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
