'use strict';

module.exports = {

  'js': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.dist %>/**/*.js*'
        ]

      }

    ]

  },

  'jsBaseDirs': {

    'files': [

      {

        'dot': true,

        'src': [
          '<%= paths.dist %>/**/.baseDir*.js*'
        ]

      }

    ]

  }

};
