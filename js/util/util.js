var util = {
	//bereken de winnaar van een set, gelijkspel = tie
	setWinner: function(team1, team2, teamName1, teamName2){
		if(team1 > team2){
			return teamName1;
		}else if (team1 < team2){
			return teamName2;
		}else{
			return "Tie";
		}
	},
	//compressArray: verwijder lege plekken uit de array (optimize)
	compressArray: function(original) {
	 
		var compressed = [];
		// make a copy of the input array
		var copy = original.slice(0);
	 
		// first loop goes over every element
		for (var i = 0; i < original.length; i++) {
	 
			var myCount = 0;	
			// loop over every element in the copy and see if it's the same
			for (var w = 0; w < copy.length; w++) {
				if (original[i] == copy[w]) {
					// increase amount of times duplicate is found
					myCount++;
					// sets item to undefined
					delete copy[w];
				}
			}
	 
			if (myCount > 0) {
				var a = new Object();
				a.value = original[i];
				a.count = myCount;
				compressed.push(a);
			}
		}
	 
		return compressed;
	}




};

