'use strict';

module.exports = {

  'tsServerApp': {

    'files': [
      '<%= paths.src %>/**/*.ts',
      '!<%= paths.app %>/**/*.ts'
    ],

    'tasks': [
      'buildTypeScriptAppServer'
    ]

  },

  'tsWebApp': {

    'files': [
      '<%= paths.app %>/**/*.ts'
    ],

    'tasks': [
      'buildTypeScriptWebApp',
      'buildJavaScript:no'
    ]

  },

  'js': {

    'files': [
      '<%= paths.app %>/<%= paths.scripts %>/**/*.js'
    ],

    'tasks': [
      'buildTypeScriptWebApp',
      'buildJavaScript:no'
    ]

  },

  'pug': {

    'files': [
      '<%= paths.src %>/**/*.pug'
    ],

    'tasks': [
      'buildAssets',
      'buildTemplates'
    ],

    'options' : {

      'livereload' : true

    }

  },

  'compass': {

    'files': [
      '<%= paths.app %>/<%= paths.styles %>/**/*.{scss,sass}'
    ],

    'tasks': [
      'buildStyles',
      'buildAssets'
    ],

    'options' : {

      'livereload' : true

    }

  }

};
