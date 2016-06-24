(function () {
  'use strict';

  angular.module('app', [
    // Vendor modules
    'ipCookie',
    'ui.router',
    'ngMessages',
    'ngSanitize',
    'ui.bootstrap',

    // App wide modules
    'constants',
    'config',
    'global',

    // App Feature Modules
    'welcome'
  ]);

})();
