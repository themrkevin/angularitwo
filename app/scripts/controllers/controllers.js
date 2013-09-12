'use strict';

/**
 *	Playing with AngularJS
 *	tutorials and random playtime
 **/
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
			console.log($scope.pokes);
		})
});