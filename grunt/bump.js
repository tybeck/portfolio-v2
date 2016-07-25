'use strict';

module.exports = {

  'options': {

    'commitMessage': 'Release v%VERSION%',

    'files': [

      'package.json'

    ],

    'updateConfigs': [

      'pkg'

    ],

    'commit': true,

    'commitFiles': [

      '-a'

    ],

    'createTag': true,

    'push': true,

    'pushTo': 'origin'

  }

};
