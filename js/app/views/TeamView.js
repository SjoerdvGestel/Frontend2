FrisApp.constructors.TeamView = Backbone.View.extend({
	tagName: "tr",

	template: $("#teamTableTemplate").html(),

	initialize: function () {
		FrisApp.views.teamViews = FrisApp.views.teamViews || [];
	},

	events: {
	    "click a.delete": "deleteTeam" // if the user clicks a.delete > call this.deleteTeam()
	},
	
	deleteTeam: function (e) { // triggered by the user clicking delete
		e.preventDefault();

	    var modelAttributes = this.model.attributes; // safe the attributes of the model before deletion
	    
		this.model.destroy(); // destroy the model on wich this view is based
	    this.remove(); // remove this view
	    
	    _.each(modelAttributes, // for each of the attributes of this teamModel >
	      function (value, key) { // call a function in which the value and the key of the attribute are passed in
	      	if (_.indexOf(FrisApp.views.PoolView.getFilterOptions(key), modelAttributes[key]) === -1) { // if the type/format is not known anymore
	          $("#"+key).children("[value='" + modelAttributes[key] + "']").remove(); // delete it aswell from the select
	        }
	      }
	    );
	},

	render: function () { // render this view in its template
	  $(this.el).html(_.template(this.template)(this.model.toJSON()));

	  return this;
	}

});

FrisApp.classesLoaded.push(FrisApp.util.getScriptName());