(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($auth) {
    var vm = this;

    vm.authenticate = authenticate;
    vm.logout = logout;
    vm.isAuthenticated = isAuthenticated;

    function authenticate(provider) {
      $auth.authenticate(provider)
        .then(function (response) {
          var a = 3;
        })
        .catch(function (response) {
          var a = 3;
        });
    }

    function logout() {
      $auth.logout()
        .then(function(){
          var a = 3;
        });
    }

    function isAuthenticated() {
      return $auth.isAuthenticated();
    };
  }
})();
