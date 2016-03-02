angular.module('routeEx')
	.factory('reddit', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'https://www.reddit.com/r/aww/.json'
		});
	
	}]);