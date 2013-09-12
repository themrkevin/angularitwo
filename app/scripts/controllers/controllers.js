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
	$scope.searchfilters = [
		{option:'all', type:'filter:search'},
		{option:'by name', type:'filter:search.name'},
		{option:'by type', type:'filter:search.type'},
		{option:'by id', type:'filter:search.id'},
		{option:'by moves', type:'filter:search.moves'}
	];
	$scope.filteroptions = $scope.searchfilters[0]; //default All
	$http
		.get('json/pokes.json')
		.then(function(res) {
			$scope.pokes = res.data;
		})
});