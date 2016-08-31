'use strict';

module.exports = {

  'checkAppServer': {

    'options': {

      'configuration': 'tslint.json'

    },

    'files': {

      'src': [
        '<%= paths.src %>/**/*.ts',
        '!<%= paths.src %>/**/*.d.ts',
        '!<%= paths.app %>/**/*.ts',
        '!node_modules/**',
        '!typings/**'
      ]

    }

  },

  'checkWebApp': {

    'options': {

      'configuration': 'tslint.json'

    },

    'files': {

      'src': [
        '<%= paths.app %>/**/*.ts',
        '!<%= paths.app %>/**/*.d.ts',
        '!node_modules/**',
        '!typings/**'
      ]

    }

  }

};
