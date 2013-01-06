FBEE.SetView = Backbone.View.extend({

	tagName: "tr",

	template: $("#setTableTemplate").html(),

	events: {
  		"click button#remove": "removeModel"
  	},


	render: function() {
		var tmpl = _.template(this.template);

		$(this.el).html(tmpl(this.model.toJSON()));

		return this;
	},

	removeModel: function(e){
		e.preventDefault();
		console.log("Remove");

		this.model.destroy();
	    this.remove();	
	}


});