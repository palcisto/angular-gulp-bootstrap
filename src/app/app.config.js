(function() {
  'use strict';

  angular
    .module('config', [])
    .config(config)
    .run(run);

  run.$inject = ['$rootScope', '$state', '$stateParams'];

  function run($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {

    let baseUrl = location.protocol + '//' + location.host;

    $stateProvider
      .state('404', {
        templateUrl: 'app/_global/404/404.html'
      });

    $locationProvider.html5Mode({enabled: true});

    $urlMatcherFactoryProvider.strictMode(false);

    $urlRouterProvider.otherwise(($injector, $location) => {
      let state = $injector.get('$state');
      state.go('404');
      return $location.path();
    });
  }
})();
