'use strict';

module.exports = {

  'compileAppServer': {

    'options': {

      'sourceMap': true,

      'emitDecoratorMetadata': true,

      'experimentalDecorators': true,

      'removeComments': false,

      'noImplicitAny': false

    },

    'files': [{

      'src': [
        '<%= paths.src %>/**/*.ts',
        '!<%= paths.src %>/**/*.d.ts',
        '!<%= paths.app %>/**/*.ts'
      ],

      'dest': '<%= paths.dist %>/.',

      'options': {

        'fast': 'never'

      }

    }]

  },

  'compileWebApp': {

    'options': {

      'sourceMap': true,

      'emitDecoratorMetadata': true,

      'experimentalDecorators': true,

      'removeComments': false,

      'noImplicitAny': false

    },

    'files': [{

      'src': [
        '<%= paths.app %>/**/*.ts',
        '!node_modules/**'
      ],

      'dest': '<%= paths.distApp %>/<%= paths.scripts %>/.',

      'options': {

        'fast': 'never'

      }

    }]

  }

}
