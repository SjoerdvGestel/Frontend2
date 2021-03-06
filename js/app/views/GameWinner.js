FBEE.WinnerView = Backbone.View.extend({

	el: $("#gameWinner"),

	initialize: function () {
	    this.collection = new FBEE.Game(FBEE.gameData);
	    
	    this.render();
  	},


	render: function () {
	    var self = this;
	    var setInfo = this.collection.at(0);
	    var team1 = setInfo.attributes.team1; 
	    var team2 = setInfo.attributes.team2;
	    var wins=[];
	    _.each(this.collection.models, function (item) {	
	    	var curentSet = item.toJSON();
	    	wins.push(curentSet.setWinner);
	    }, this);
	    this.renderWinner(util.compressArray(wins));
	},


	//bereken de Gamewinner op basis van de scores. 
	//Known error: als 1 team alle sets heeft gewonnen crasht het, Note: dit gedeelte was niet verplicht en is daarom niet verder uitgewerkt
	renderWinner: function (objectArray){
		var winner = new Object();
		var loser = new Object();
		
		winner.name = ((objectArray[0].count > objectArray[1].count) ? objectArray[0].value : objectArray[1].value);
		winner.score = ((objectArray[0].count > objectArray[1].count) ? objectArray[0].count : objectArray[1].count);

		loser.name  = ((objectArray[0].count > objectArray[1].count) ? objectArray[1].value : objectArray[0].value);
		loser.score = ((objectArray[0].count > objectArray[1].count) ? objectArray[1].count : objectArray[0].count);

		this.$el.append("<tr><td class='winner'>"+winner.name+"</td><td>" + winner.score + " - " + loser.score + "</td><td>"+loser.name+"</td></tr>");

	}

});