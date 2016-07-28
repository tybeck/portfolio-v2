'use strict';

module.exports = {

  'compile': {

    'options': {

      'client': false,

      'pretty': true,

      'basedir': '<%= paths.app %>/<%= paths.templates %>/'

    },

    'files': [ {

      'cwd': '<%= paths.app %>/<%= paths.templates %>',

      'src': '**/*.pug',

      'dest': '<%= paths.distApp %>/<%= paths.templates %>',

      'expand': true,

      'ext': '.html'

      },

      {

      'cwd': '<%= paths.app %>/',

      'src': '*.pug',

      'dest': '<%= paths.distApp %>/',

      'expand': true,

      'ext': '.html'

      }

    ]

  }

};
