FBEE.SetView = Backbone.View.extend({

	tagName: "tr",

	template: $("#setTableTemplate").html(),

	events: {
  		"click button#remove": "removeModel"
  	},

  	//render de setView
	render: function() {
		var tmpl = _.template(this.template);

		$(this.el).html(tmpl(this.model.toJSON()));

		return this;
	},

	//verwijder het geselecteerde model uit view
	removeModel: function(e){
		e.preventDefault();
		console.log("Remove");

		this.model.destroy();
	    this.remove();	
	}


});