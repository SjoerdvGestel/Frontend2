FBEE.Game = Backbone.Collection.extend({
		
	model: FBEE.Set,

	comparator: function(set) {
        return parseFloat(set.get('set')); //comerator functie wordt gebruikt om te ordenen op set nummer
    } 
});