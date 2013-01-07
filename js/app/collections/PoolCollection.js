FrisApp.data.rankingData = [ 
    { team: "Chasing", won: "2", lost: "2", setsWon: "7", setsLost: "9", pointsWon: "35", pointsLost: "39"},
    { team: "Boomsquad", won: "2", lost: "2", setsWon: "9", setsLost: "8", pointsWon: "36", pointsLost: "34"},
    { team: "Burning Snow", won: "3", lost: "1", setsWon: "11", setsLost: "4", pointsWon: "36", pointsLost: "23"},
    { team: "Beast Amsterdam", won: "2", lost: "2", setsWon: "6", setsLost: "8", pointsWon: "30", pointsLost: "34"},
    { team: "Amsterdam Money Gang", won: "1", lost: "3", setsWon: "6", setsLost: "10", pointsWon: "30", pointsLost: "37"}
];

FrisApp.constructors.PoolCollection = Backbone.Collection.extend({
  model: FrisApp.constructors.TeamModel,

  sortKey: "team",

  comparator: function(model) { //whenecer this collection sorts it will do so based on this comparator
    if (this.sortKey === "team") return model.get(this.sortKey); // if the sortKey == team > return in normal order
    else return -model.get(this.sortKey); // else reverse the order for the numbers so the highest comes first
  },

  sortOn: function (key) { // this function sets the sort_key key/attribute of the model, on which this collection is based,
    this.sortKey = key; // set the key passed in to this.sortKey.
    this.sort(); // force this collection to sort itself.
  }

});

FrisApp.classesLoaded.push(FrisApp.util.getScriptName());