triplify.core.App = Backbone.View.extend({
	
	// DAO
	dao : {
		stardog : new triplify.dao.Stardog,
	},

	// UTIL
	util : {
		page : new triplify.util.Page,
		dialog : new triplify.util.Dialog,
	},
	
	//initialize
	initialize : function() {
		console.log('App Started!');
	},
	
	//repository page
	repository : function () {
		
		var page = this.util.page;
		var dialog = this.util.dialog;
		
		
		var newRepository = page.generateRepositoryPage();
		newRepository.click(function() {
			//alert('NEW!');
			dialog.generateRepositoryDialog();
		});
		
	},
	
});