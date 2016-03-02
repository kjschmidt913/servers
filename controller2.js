var app = angular.module('routeEx');

app.controller("showWords", function($scope, wordsService){
	$scope.displayName = wordsService.getName();
	$scope.displayAdjective = wordsService.getAdjective();
	$scope.displayVerb = wordsService.getVerb();
	$scope.displayNoun = wordsService.getNoun();
	$scope.displayExclaimation = wordsService.getExclaimation();
	$scope.displaySpaceObject = wordsService.getSpaceObject();
	$scope.displayQuestionWord = wordsService.getQuestionWord();
	$scope.displayGoodBye = wordsService.getGoodBye();

})