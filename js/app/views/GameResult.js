var GameView = Backbone.View.extend({
	
	el: $("#gameResult"),

	initialize: function () {
	    this.collection = new Game(gameData); 
	    this.render();
  	},

  	render: function () {
	    var self = this;
	    _.each(this.collection.models, function (item) {	
	      	self.renderSet(item);
	    }, this);
	},


	renderSet: function (item){
		var setView = new SetView({
     		 model: item
   		 });
		this.$el.append(setView.render().el);
	}
});