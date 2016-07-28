'use strict';

module.exports = {

  'options': {

      'sassDir': '<%= paths.app %>/<%= paths.styles %>',

      'specify': '<%= paths.app %>/<%= paths.styles %>/app.scss',

      'cssDir': '<%= paths.distApp %>/<%= paths.styles %>',

      'imagesDir': '<%= paths.distApp %>/<%= paths.images %>',

      'javascriptsDir': '<%= paths.distApp %>/<%= paths.scripts %>',

      'fontsDir': '<%= paths.distApp %>/<%= paths.styles %>/fonts',

      //'importPath': '<%= paths.distApp %>/bower_components',

      'httpFontsPath': '<%=paths.distApp %>/<%= paths.styles %>/fonts',

      'relativeAssets': false,

      'assetCacheBuster': false,

      'raw': 'Sass::Script::Number.precision = 10\n'

  },

  'server': {

      'options': {

          'debugInfo': false

      }

  }

};
