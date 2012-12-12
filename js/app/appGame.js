//Tournaments Web App *(Backbone example application)*
/**
 *	Tournaments Web App (Backbone example application)
 *	
 *
 */

// Anonymous self-invoked function with jQuery mapped to $
(function ($) {

	var gameData = [
		{ set: "1", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "1"},
		{ set: "2", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "4"},
		{ set: "3", team1: "Boomsquad", team1Score: "0", team2: "Burning Snow", team2Score: "4"},
		{ set: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "4"},
		{ set: "5", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "3"}
	];

	Set = Backbone.Model.extend({
		
		defaults: {
			"set": "0",
			"team1": "Home team name unknown",		
			"team1Score": "unknown",
			"team2": "Away team name unknown",
			"team2Score": "unknown"
		},
		
		initialize: function () {
			this.logMessage("Set model initialized");
		},
		
		logMessage: function (message) {
			console.log(message);
		}
	
	});

	Game = Backbone.Collection.extend({
		
		model: set,
		
		initialize: function () {
			this.logMessage("Game collection initialized");
		},
		
		logMessage: function (message) {
			console.log(message);
		}
		
	});
	
	GameView = Backbone.View.extend({
	
	});
	
	WinnerView = Backbone.View.extend({
	
	});
} (jQuery));