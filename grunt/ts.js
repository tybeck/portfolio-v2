'use strict';

module.exports = {

  'compileAppServer': {

    'files': [{

      'src': [
        '<%= paths.src %>/**/*.ts',
        '!<%= paths.src %>/**/*.d.ts',
        '!<%= paths.app %>/**/*.ts'
      ],

      'dest': '<%= paths.dist %>/.',

      'options': {

        'fast': 'never',

        'module': 'commonjs',

        'target': 'es6'

      }

    }]

  },

  'compileWebApp': {

    'files': [{

      'src': [
        '<%= paths.app %>/**/*.ts',
        '!<%= paths.app %>/**/*.d.ts'
      ],

      'dest': '<%= paths.dist %>/<%= paths.scripts %>/app.js',

      'options': {

        'fast': 'never',

        'target': 'es6',

        'module': 'commonjs'

      }

    }]

  }

}
