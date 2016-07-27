'use strict';

module.exports = {

  'projects': ['<%= paths.dist %>/projects/'],

  'js': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.dist %>/**/*.js*',
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
          '!<%= paths.dist %>/projects/**/*.js*'
        ]

      }

    ]

  }

};
