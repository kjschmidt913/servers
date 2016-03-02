var app = angular.module('routeEx', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl:'view1.html',
		controller: 'routeCtrl'
	});

	$routeProvider.when('/view2', {
		templateUrl: 'view2.html',
		controller: 'showWords'
	});

	$routeProvider.when('/view3', {
		templateUrl: 'view3.html',
		controller: 'redditDisplay'
	});

});