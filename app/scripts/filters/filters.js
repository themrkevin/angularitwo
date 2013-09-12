'use strict';

/**
 *	Playing with AngularJS
 *	tutorials and random playtime
 **/
//	Filters
playground.filter('reversify', function() {
	return function(text) {
		if(text) {
			return text.split('').reverse().join('') + ' - via filter';
		}
	}
});