'use strict';

var playground = angular.module('playground', []);
playground.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MsgCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
