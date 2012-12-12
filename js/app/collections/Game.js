var Game = Backbone.Collection.extend({
		
	model: Set,
	
	initialize: function () {
		this.logMessage("Game collection initialized");
	},
	
	logMessage: function (message) {
		console.log(message);
	}
	
});