(function () {
  'use strict';

  angular
    .module('frontend')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;


    $authProvider.httpInterceptor = function () {
      return true;
    };



    // Google
    $authProvider.google({
      clientId: '726919547477-6aesclcdq0gii35lqia3etkhr98ade30.apps.googleusercontent.com'
    });


  }

})();
