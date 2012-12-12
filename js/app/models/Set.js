var Set = Backbone.Model.extend({
		
		defaults: {
			set: 0,
			team1: 'unknown',		
			team1Score: 0,
			team2: 'unknown',
			team2Score: 0
		},
		
		initialize: function () {
			this.logMessage("Set model initialized");
		},
		
		logMessage: function (message) {
			console.log(message);
		}
	
	});