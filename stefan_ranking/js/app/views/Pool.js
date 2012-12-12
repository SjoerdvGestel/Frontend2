var PoolView = Backbone.View.extend({
  
  el: $("#teamTable"),
  
  initialize: function () {
    this.collection = new Pool(rankingData);
    
    this.render();
  },
  
 render: function () {
    var self = this;

    _.each(this.collection.models, function (item) {
      self.renderTeam(item);
    }, this);
  },
  
  renderTeam: function (item) {
    var teamView = new TeamView({
      model: item
    });

    this.$el.append(teamView.render().el);
  }

});