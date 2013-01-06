FBEE.GameView = Backbone.View.extend({
	
	el: $("#gameContainer"),

	initialize: function () {
	    this.collection = new FBEE.Game(FBEE.gameData); 
	    this.gameTable =  this.$el.find("#gameResult");
	    this.addSetForum =  this.$el.find("#addGameSet");

	    this.render();

	    this.$el.find("#filter").append(this.createFilterOptions());
	    this.on("change:filterType", this.filterByOptions, this);


	    this.collection.on("reset", this.render, this);
	    this.collection.on("addSet", this.renderSet, this);
	    this.collection.on("remove", this.removeSet, this);
  	},

  	//assign events
  	events: {
  		"click #addSet": "addAction",
  		"change #filter select": "setFilter"
  	},

  	//render de view
  	render: function () {
  		console.log("render");
  		$("#gameResult").find("tr:gt(0)").remove(); //http://stackoverflow.com/a/370031/1136000
	    var self = this;
	    _.each(this.collection.models, function (item) {	
	      	self.renderSet(item);
	    }, this);
	},

	//render de verschillende sets 
	renderSet: function (item){
		console.log("renderSet");
		var setView = new FBEE.SetView({
     		 model: item
   		 });
		this.gameTable.append(setView.render().el);
	},

	//actie voor het toevoegen van een set
	addAction: function(e){
		e.preventDefault(); 
		var newSet = {};
		var inputError = false;
		//Voer vvoor elk child input van het form addGameSet de functie uit die de data uit de velden aan het set object toevoegd
		this.addSetForum.children("input").each(function(i, el) {
			if($(el).val() !== ""){
				newSet[el.id] = $(el).val();
			}
			else{ //zet de boolean inputError op true als er één of meerdere velden
				inputError = true;
			}
		});
		if(!inputError){ //Uitvoeren indien er geen inputError gedetecteerd is
			this.addSetForum.children("input").each(function(i, el) {$(el).val("");}); //reset de velden van het input form
			FBEE.gameData.push(newSet); //voeg de nieuwe set toe aan de gamedata array
			var thisSet = new FBEE.Set(newSet); //
			if(_.indexOf(this.getWinners(), thisSet.attributes.setWinner) === -1) { //als de winnaar nog niet voor komt wordt deze toegevoegd aan de filter picker (kan ook een tie zijn)
				this.collection.add(thisSet); //voeg de nieuwe set toe aan de collection
				this.$el.find("#filter").find("select").remove().end().append(this.createFilterOptions()); //reset de filter picker
			}else{// de winnaar is al bekend
				this.collection.add(thisSet);
			}
			this.collection.reset(FBEE.gameData);
			console.log(FBEE.gameData);
		}
		else{ //Execute alert naar de gebruiker dat er 1 of meerdere velden niet zijn ingevuld
			alert("U heeft een veld niet ingevuld");
		}
	},

	removeSet: function (model) {
		console.log("removeSet");
		var toRemove = model.attributes;
		delete toRemove["setWinner"]; //verwijder het attribute setWinner van het object, dit zorgt er voor dat het object overeen komt met de orininele data en kan worden vergeleken in _.isEqual

		_.each(FBEE.gameData, function (item) {
	        if (_.isEqual(item, toRemove)) {
	           FBEE.gameData.splice(_.indexOf(FBEE.gameData, item), 1);
	        }
	    });
		console.log(FBEE.gameData);
	},

	getWinners: function () { //haal uit de collectie alle setWinners
	     return _.uniq(this.collection.pluck("setWinner"), false, function (type) {
	     	console.log(type);
	        return type.toLowerCase();
	    });
	},

	createFilterOptions: function () { //creeer filteropties: standaardfilter: op sets volgorde. Dynamic filters: set winnaars (waaronder tie)
	    var filter = this.$el.find("#filter"),
	    htmlString = $("<select/>", { html: "<option value='sets'>Sets</option>"});
	    if(this.getWinners().length > 1){
			_.each(this.getWinners(), function (item) {
				        var option = $("<option/>", {
				            value: item.toLowerCase(),
				            text: item.toLowerCase()
				        }).appendTo(htmlString);
			});
	    }
	    return htmlString;
	},

	filterByOptions: function () { //voer opgegeven fileroptie uit
	    if (this.filterType === "sets") { 
	        this.collection.reset(FBEE.gameData);
	    }else {
	        this.collection.reset(FBEE.gameData, { silent: true });
	        var filterType = this.filterType,
	            filtered = _.filter(this.collection.models, function (item) {
	            return item.get("setWinner").toLowerCase() === filterType;
	        });
	        this.collection.reset(filtered);
	    }
	},

	setFilter: function (e) { //zet de opgegeven filer en vuur een custom trigger af voor dit event
	    this.filterType = e.currentTarget.value;
		this.trigger("change:filterType");
	}
});