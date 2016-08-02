'use strict';

(function (system) {

  let sys = {

    'mappings': {

      'app': '/scripts',

      '@angular': '/modules/@angular',

      'angular2-in-memory-web-api': '/modules/angular2-in-memory-web-api',

      'rxjs': '/modules/rxjs'

    },

    'packages': {

      'app': {

        'main': 'app',

        'defaultExtension': 'js'

      },

      'rxjs': {

        'defaultExtension': 'js'

      },

      'angular2-in-memory-web-api': {

        'main': 'index.js',

        'defaultExtension': 'js'

      }

    },

    'ngPackages': [
      'common',
      'compiler',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router',
      'router-deprecated',
      'upgrade'
    ],

    packIndex: function (pkgName) {

      let self = this;

      self.ngPackages.forEach(function (pkgName) {

        self.packages['@angular/' + pkgName] = {

          'main': 'index.js',

          'defaultExtension': 'js'

        };

      });

    },

    packUMD: function (pkgName) {

      let self = this;

      self.ngPackages.forEach(function (pkgName) {

        self.packages['@angular/' + pkgName] = {

          'main': '/bundles/' + pkgName + '.umd.js',

          'defaultExtension': 'js'

        };

      });

    },

    pack: function () {

      this[system.packageWithIndex ? 'packIndex' : 'packUMD']();

      return this;

    },

    config: function () {

      system.config({

        'map': this.mappings,

        'packages': this.packages

      });

      return this;

    },

    import: function (name) {

      system
        .import(name)
        .catch(function (err) {

          return console.error(err);

        });

      return this;

    }

  };

 if (system) {

   sys
    .pack()
    .config()
    .import('app');

 }

})(System || {});
