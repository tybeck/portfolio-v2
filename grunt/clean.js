'use strict';

module.exports = {

  'projects': ['<%= paths.dist %>/projects/'],

  'styles': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.distApp %>/<%= paths.styles %>/*'
        ]

      }

    ]

  },

  'pug': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.distApp %>/<%= paths.templates %>/*',
          '<%= paths.distApp %>/*.html'
        ]

      }

    ]

  },

  'jsWebApp': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.distApp %>/**/*.js*'
        ]

      }

    ]

  },

  'jsAppServerCompiled': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.dist %>/**/*.js*',
          '!<%= paths.distApp %>/**/*.js*',
          '!<%= paths.dist %>/projects/**/*.js*'
        ]

      }

    ]

  },

  'jsBaseDirs': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.dist %>/**/.baseDir*.js*',
          '!<%= paths.dist %>/projects/**/.baseDir*.js*'
        ]

      }

    ]

  }

};
