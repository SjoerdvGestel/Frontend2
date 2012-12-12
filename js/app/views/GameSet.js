var SetView = Backbone.View.extend({

	tagName: "tr",

	template: $("#setTableTemplate").html(),

	render: function() {
		var tmpl = _.template(this.template);
		
		console.log(this.model.toJSON());


		console.log("SetView - render")
		$(this.el).html(tmpl(this.model.toJSON()));


		console.log(this)
		return this;
	}


});