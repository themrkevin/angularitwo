'use strict';

var playground = angular.module('playground', []);
playground.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
    	templateUrl: 'views/message.html',
    	controller: 'MsgCtrl'
    })
    .when('/list', {
    	templateUrl: 'views/search.html',
    	controller: 'SearchCtrl'
    })
    .otherwise({
    	redirectTo: '/'
    });
});
