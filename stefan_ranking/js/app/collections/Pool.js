// To collection
  var rankingData = [ 
    { team: "Chasing", won: "2", lost: "2", setsWon: "7", setsLost: "9", pointsWon: "35", pointsLost: "39"},
    { team: "Boomsquad", won: "2", lost: "2", setsWon: "9", setsLost: "8", pointsWon: "36", pointsLost: "34"},
    { team: "Burning Snow", won: "3", lost: "1", setsWon: "11", setsLost: "4", pointsWon: "36", pointsLost: "23"},
    { team: "Beast Amsterdam", won: "2", lost: "2", setsWon: "6", setsLost: "8", pointsWon: "30", pointsLost: "34"},
    { team: "Amsterdam Money Gang", won: "1", lost: "3", setsWon: "6", setsLost: "10", pointsWon: "30", pointsLost: "37"}
  ];

  var Pool = Backbone.Collection.extend({
    model: Team
  });