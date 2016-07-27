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

  'projects': {

    'expand': true,

    'cwd': '<%= paths.src %>/',

    'dest': '<%= paths.dist %>/',

    'src': 'projects/**/*'

  },

};
