angular.module('routeEx')
	.controller('redditDisplay', ['reddit', '$http', function(reddit, $http){
		var display = this;

		reddit.then(function success(response){
			console.log(response.data.data.children);
			display.posts = response.data.data.children;
		});
		

	}]);