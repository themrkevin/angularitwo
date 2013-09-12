'use strict';

/**
 *	Playing with AngularJS
 *	tutorials and random playtime
 **/
//	Services
playground.factory('Data', function() {
	return {
		message: "I'm data from a service",
	}
});
playground.factory('SearchFilts', function() {
	var SearchFilts = {};
	SearchFilts = [
		{option:'all', type:'filter:search'},
		{option:'by name', type:'filter:search.name'},
		{option:'by type', type:'filter:search.type'},
		{option:'by id', type:'filter:search.id'},
		{option:'by moves', type:'filter:search.moves'}
	];
	return SearchFilts;
});