var Set = Backbone.Model.extend({
		
		defaults: {
			set: 0,
			team1: 'unknown',		
			team1Score: 0,
			team2: 'unknown',
			team2Score: 0,
			setWinner: 'unknown'
		},

		initialize : function () {
    		this.attributes.setWinner = util.setWinner(this.attributes.team1Score, this.attributes.team2Score, this.attributes.team1, this.attributes.team2);
  		}


	});