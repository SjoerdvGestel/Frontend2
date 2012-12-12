var GameView = Backbone.View.extend({
	
	el: $("#gameResult"),

	initialize: function () {
	    this.collection = new Game(gameData);
	    
	    this.render();
  	},

  	render: function () {
	    var self = this;

	    console.log("GameView - render")

	    _.each(this.collection.models, function (item) {	      
	      console.log("GameView - foreach");
	      self.renderSet(item);
	    }, this);
	},


	renderSet: function (item){
		console.log("GameView - renderSet");
		var setView = new SetView({
     		 model: item
   		 });
		console.log(setView.render().el);
		this.$el.append(setView.render().el);

	}
});