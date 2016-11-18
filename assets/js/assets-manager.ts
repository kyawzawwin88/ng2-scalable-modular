((global: any) => {
  let map = {
    main:                         'assets/js/main.js',

    '@angular/core'            : 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common'          : 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler'        : 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http'            : 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router'          : 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms'           : 'npm:@angular/forms/bundles/forms.umd.js',
    'rxjs'                     : 'npm:rxjs',
    'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',

    'angular-2-local-storage': 'npm:angular-2-local-storage',
    'angular2-logger'                 : 'npm:angular2-logger',
    'ng2-bootstrap'           : 'npm:ng2-bootstrap',
    'lodash'           : 'npm:lodash',
    'ng2-toastr/ng2-toastr'                     : 'npm:ng2-toastr',
  };

  var packages = {
    'assets/js/app': {
      main: '../app.js',
      defaultExtension: 'js'
    },
    'assets/js/routes': {
      main: '../routes.js',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: '',
      main: 'bundles/Rx.min.js'
    },
    'ng2-toastr/ng2-toastr': {
      defaultExtension: 'js',
      main: 'ng2-toastr.js'
    },
    'angular2-logger': {
      defaultExtension: 'js'
    },
    'angular-2-local-storage': { 
       main: 'dist/angular-2-local-storage.js', 
       defaultExtension: 'js'
    },
    'angular2-in-memory-web-api': {
      main: './index.js',
      defaultExtension: 'js'
    },
    'ng2-bootstrap': {
      defaultExtension: 'js'
    },
    'lodash': {
      main: './index.js',
      defaultExtension: 'js'
    },
    'core-module': {
      defaultExtension: 'js'
    },
    'shared-module': {
      defaultExtension: 'js'
    },
    'user-module': {
      defaultExtension: 'js'
    },
    'todo-module': {
      defaultExtension: 'js'
    },
    'services/*.service': {
      defaultExtension: 'js'
    }
  };
  var systemConfig = {
    baseURL: '/',
    defaultJSExtensions: false,
    paths: {
      'npm:': 'node_modules/',
      //'utils:': 'common/utils/'
    },
    map: map,
    packages: packages
  };
  
  System.config(systemConfig);
})(this);