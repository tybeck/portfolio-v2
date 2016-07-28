'use strict';

module.exports = {

  'config': {

    'files': [

      {

        'expand': true,

        'cwd': '<%= paths.config %>/',

        'dest': '<%= paths.dist %>/<%= paths.config %>/',

        'src': '**/*.*'

      }

    ]

  },

  'js': {

    'files': [

      {

        'expand': true,

        'cwd': '<%= paths.app %>/<%= paths.scripts %>',

        'dest': '<%= paths.distApp %>/<%= paths.scripts %>/',

        'src': '**/*.js'

      }

    ]

  },

  'projects': {

    'expand': true,

    'cwd': '<%= paths.src %>/',

    'dest': '<%= paths.dist %>/',

    'src': 'projects/**/*'

  },

  'fonts': {

    'files': [

      {

        'expand': true,

        'cwd': '<%= paths.app %>/<%= paths.styles %>/fonts/',

        'dest': '<%= paths.distApp %>/<%= paths.styles %>/fonts/',

        'src': '{,*/}*.*'

      }

    ]

  },

  'images': {

    'files': [

      {

        'expand': true,

        'dot': true,

        'cwd': '<%= paths.app %>/<%= paths.images %>/',

        'dest': '<%= paths.distApp %>/<%= paths.images %>/',

        'src': '*/**/*.{webp,gif,png,jpg}'

      }, {

        'expand': true,

        'dot': true,

        'cwd': '<%= paths.app %>/<%= paths.images %>/',

        'dest': '<%= paths.distApp %>/<%= paths.images %>/',

        'src': '{,*/}*.{webp,gif,png,jpg}'

      }

    ]

  }

};
