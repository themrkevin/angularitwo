'use strict';

/**
 *	Playing with AngularJS
 *	tutorials and random playtime
 **/
//	Services
playground.factory('Data', function() {
	return {
		message: "I'm data from a service"
	}
});
//	Filters
playground.filter('reversify', function() {
	return function(text) {
		if(text) {
			return text.split('').reverse().join('') + ' - via filter';
		}
	}
});
//	Controllers
playground.controller('MsgCtrl', function($scope, Data) {
	$scope.data = Data;
	$scope.reversify = function(message) {
		if(message) {
			return message.split('').reverse().join('') + ' - via method';
		}
	}
});
playground.controller('SearchCtrl', function($scope, $http) {
	$http
		.get('json/pokes.json')
		.then(function(res) {
			$scope.pokes = res.data;
		})
});