(function() {
  'use strict';

  angular
    .module('welcome.config', [])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '',
        templateUrl: 'app/welcome/welcome.html',
        controller: 'WelcomeController',
        controllerAs: 'WelcomeCtrl'
      });
  }
})();
