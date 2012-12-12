var TeamView = Backbone.View.extend({
	tagName: "tr",

	template: $("#teamTableTemplate").html(),

	render: function () {
	  var tmpl = _.template(this.template);
	  
	  $(this.el).html(tmpl(this.model.toJSON()));

	  return this;
	}

});