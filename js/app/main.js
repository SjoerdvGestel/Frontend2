var FrisApp = FrisApp || {};

(function($){
	FrisApp.views = FrisApp.views || {};
	FrisApp.models = FrisApp.models || {};
	FrisApp.data = FrisApp.data || {};
	FrisApp.collections = FrisApp.collections || {};
	FrisApp.constructors = FrisApp.constructors || {};

	FrisApp.requiredClasses = ['TeamModel', 'PoolCollection', 'TeamView', 'PoolView'];
	FrisApp.classesLoaded = [];
	_.observe(FrisApp.classesLoaded, 'create', function() {FrisApp.handleClassLoaded();});

	FrisApp.handleClassLoaded = function() {
		if (FrisApp.classesLoaded.compare(FrisApp.requiredClasses)) {
			FrisApp.base.dispatchEvent(new CustomEvent('requiredClassesLoaded',{bubbles: true,cancelable: true}));
			FrisApp.base.removeEventListener('requiredClassesLoaded', FrisApp.handleClassLoaded);
		}
	};

	FrisApp.base = document.body;
	FrisApp.base.addEventListener('requiredClassesLoaded', 
		function (e) {
			FrisApp.views.PoolView = new FrisApp.constructors.PoolView();
		}
	);
})(jQuery);


// WORKING ON   :  O/X TASK
// 				:   X- Implementing sorting on base of all the attributs which of the model
// 				:   X- Implement filtering
// 				:   X- delete the value from the select when a teamModel is deleted from the view @ teamView
// 				:   X- Create add team functionality
// 				:   X- when the team is added it should come in the select filter
// 				:   X- Commenting all I did 
// 				: 	O- CSS table heads don't fit to nice
//				:   O- CSS I guess when the user clicks on the addTeam button the whole table changes... why?


// KOWN ISSUES	:  	O- User cannot use multiple selects at the same time. 
//				: 	 - Implemented work around that when user click on another filter the currentOne is set to "all"
//				: 	 - Could fix this by applying the next filter on the already filterd result. As the collection is very small this feature is not important.
//				:  	O- If user selected one filter and decides to use another filter and selects "all" Nothing happens as it was not changed
//				: 	 - Could be solved by setting all other selects to "inactive"? or something. So when it is clicked it will be changed.
//				:    - Another way would be to just trigger the event "select change" when the user clicks on another filter than is now appleid and the previous is not on "all"
//				: 	O- After Deletion teams still show up if the filter is set back to "all"