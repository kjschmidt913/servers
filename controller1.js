var app = angular.module('routeEx');

app.controller('routeCtrl', ["$scope", "wordsService", function($scope, wordsService){

	$scope.save = function(){
		wordsService.saveName($scope.name);
		wordsService.saveAdjective($scope.adjective);
		wordsService.saveVerb($scope.verb);
		wordsService.saveNoun($scope.noun);
		wordsService.saveExclaimation($scope.exclaimation);
		wordsService.saveSpaceObject($scope.spaceObject);
		wordsService.saveQuestionWord($scope.questionWord);
		wordsService.saveGoodBye($scope.goodBye);
		};
}]);