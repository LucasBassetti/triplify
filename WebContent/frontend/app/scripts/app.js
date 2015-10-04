'use strict';

angular
  .module('triplifyApp', ['ngRoute', 'ui.bootstrap', 'angularModalService'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/repository', {
        templateUrl: 'frontend/app/views/repository.jsp',
        controller: 'repositoryCtrl'
      })
      .when('/modal', {
        templateUrl: 'frontend/app/views/myModalContent.jsp',
        controller: 'modalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
