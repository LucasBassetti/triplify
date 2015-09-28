triplify.core.App = Backbone.View.extend({
	
	//CORE
	model : {
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
	
	//initialize
	initialize : function() {
		console.log('App Started!');
	},
	
	//repository page
	repository : function() {
		
		var page = this.util.page;
		var dialog = this.util.dialog;
		
		page.generateRepositoryPage();
		
		var newRepository = $('.new-repository');
		newRepository.click(function() {
			//alert('NEW!');
			dialog.generateRepositoryDialog();
		});
		
	},
	
	//configuration page
	configuration : function() {
		
		var page = this.util.page;
		var configuration = this.dao.configuration;
		
		page.generateConfigurationPage();
		
		var conf = configuration.getFileConfiguration();
		
		console.log(JSON.stringify(conf));
		
		var databases = $('.databases'),
			tripleStores = $('.triple-stores');
		
		var tsContent = '',
			dbContent = '';
		
		$.each(conf.databases, function(index, database) {
			dbContent += '<div class="database">';
			dbContent += database.name + ' ' + database.endpoint + ' ' + database.username + ' ' + database.password;
			dbContent += '</div>';
			
			dbContent += '<div class="database">';
			dbContent += database.name + ' ' + database.endpoint + ' ' + database.username + ' ' + database.password;
			dbContent += '</div>';
		});
		
		databases.append(dbContent);
		
		$.each(conf.tripleStores, function(index, tripleStore) {
			tsContent += '<div class="triple-store">';
			tsContent += tripleStore.name + ' ' + tripleStore.endpoint + ' ' + tripleStore.username + ' ' + tripleStore.password;
			tsContent += '</div>';
		});
		
		tripleStores.append(tsContent);
		
	}
	
});