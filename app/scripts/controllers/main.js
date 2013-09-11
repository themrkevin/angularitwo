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
		return text.split('').reverse().join('') + ' - via filter';
	}
});
//	Controllers
playground.controller('MsgCtrl', function($scope, Data) {
	$scope.data = Data;
	$scope.reversify = function(message) {
		return message.split('').reverse().join('') + ' - via method';
	}
});