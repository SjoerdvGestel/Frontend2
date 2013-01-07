FrisApp.constructors.TeamModel = Backbone.Model.extend({
  defaults: {
    team: 'team name',
    won: 0,
    lost: 0,
    setsWon: 0,
    setsLost: 0,
    pointsWon: 0,
    pointsLost: 0,
    setsBalance: 0,
    pointsBalance: 0
  },

  initialize : function () {
    FrisApp.models.teamModels = FrisApp.models.teamModels || [];
    this.attributes.setsBalance = FrisApp.util.calcDifference(this.attributes.setsWon, this.attributes.setsLost);
    this.attributes.pointsBalance = FrisApp.util.calcDifference(this.attributes.pointsWon, this.attributes.pointsLost);
  }
});

FrisApp.classesLoaded.push(FrisApp.util.getScriptName());