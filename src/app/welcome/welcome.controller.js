(function() {
  'use strict';

  angular
    .module('welcome.controllers', [])
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = [];

  function WelcomeController() {
    const vm = this;

    vm.welcome = 'Welcome to Angular Gulp Bootstrap!';
  }
})();
