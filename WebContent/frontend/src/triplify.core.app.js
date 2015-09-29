triplify.core.App = Backbone.View.extend({
	
	//CORE
	model : {
		page : new triplify.core.Page,
		ontology: new triplify.core.Ontology,
	},
	
	// DAO
	dao : {
		configuration : new triplify.dao.Configuration,
		stardog : new triplify.dao.Stardog,
	},

	// UTIL
	util : {
		page : new triplify.util.Page,
		dialog : new triplify.util.Dialog,
	},
	
	initialize : function() {
		console.log('App Started!');
	},
	
	start : function() {
		
		this.model.page.setApp(this);
		
	},
	
	//dashboard page
	dashboard : function() {
		
		var page = this.model.page;
		page.dashboard();
		
	},
	
	newTriplify : function() {
		
		var page = this.model.page;
		page.newTriplify();
		
	},
	
	database : function() {
		
		var page = this.model.page;
		page.database();
		
	},
	
	repository : function() {
		
		var page = this.model.page;
		var dialog = this.util.dialog;
		
		page.repository();
		
		var newRepository = $('.new-repository');
		newRepository.click(function() {
			dialog.generateRepositoryDialog();
		});
		
	},
	
	configuration : function() {
		
		var page = this.model.page;
		page.configuration();
		
	},
	
	documentation : function() {
		
		var page = this.model.page;
		page.documentation();
		
	}
	
});