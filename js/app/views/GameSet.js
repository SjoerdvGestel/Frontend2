var SetView = Backbone.View.extend({

	tagName: "tr",

	template: $("#setTableTemplate").html(),

	render: function() {
		var tmpl = _.template(this.template);

		$(this.el).html(tmpl(this.model.toJSON()));

		return this;
	}


});