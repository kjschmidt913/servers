var app = angular.module('routeEx');

app.factory('wordsService', function(){
	var userName = "";
	var userAdjective = "";
	var userVerb = "";
	var userNoun = "";
	var userExclaimation = "";
	var userSpaceObject = "";
	var userQuestionWord = "";
	var userGoodBye = "";


	return {
		
		//saves all the text box input
		saveName: function(name){
			userName = name;
		},

		saveAdjective: function (adjective){
			userAdjective = adjective;
		},

		saveVerb: function (verb){
			userVerb = verb;
		},

		saveNoun: function (noun){
			userNoun = noun;
		},

		saveExclaimation: function (exclaimation){
			userExclaimation = exclaimation;
		},

		saveSpaceObject: function (spaceObject){
			userSpaceObject = spaceObject
		},

		saveQuestionWord: function (questionWord){
			userQuestionWord = questionWord;
		},

		saveGoodBye: function (goodBye){
			userGoodBye = goodBye;
		},
		
		//gets all the text box input
		getName: function(){
			return userName;
		},

		getAdjective: function(){
			return userAdjective;
		},

		getVerb: function(){
			return userVerb;
		},

		getNoun: function(){
			return userNoun;
		},

		getExclaimation: function(){
			return userExclaimation;
		},

		getSpaceObject: function(){
			return userSpaceObject;
		},

		getQuestionWord: function(){
			return userQuestionWord;
		},

		getGoodBye: function (){
			return userGoodBye;
		}

	};
});