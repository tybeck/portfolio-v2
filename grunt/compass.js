'use strict';

module.exports = {

  'options': {

      'sassDir': '<%= paths.app %>/<%= paths.styles %>/',

      'cssDir': '<%= paths.distApp %>/<%= paths.styles %>/',

      'imagesDir': '<%= paths.distApp %>/<%= paths.images %>',

      'javascriptsDir': '<%= paths.distApp %>/<%= paths.scripts %>',

      'fontsDir': '<%= paths.distApp %>/<%= paths.styles %>/fonts',

      //'importPath': '<%= paths.distApp %>/bower_components',

      'httpFontsPath': '<%=paths.distApp %>/<%= paths.styles %>/fonts',

      'relativeAssets': false,

      'assetCacheBuster': false,

      'outputStyle': 'expanded'

  },

  'server': {

      'options': {

          'debugInfo': false

      }

  }

};
