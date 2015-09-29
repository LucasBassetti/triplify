triplify.core.Page = Backbone.Model.extend({
	
	app : undefined,
	
	//initialize
	initialize : function() {
		
	},
	
	setApp : function(app) {
		this.app = app;
	},
	
	//dashboard page
	dashboard : function() {
		
		var pageUtil = this.app.util.page;
		pageUtil.generateDashboardPage();
		
	},
	
	newTriplify : function() {
		
		var pageUtil = this.app.util.page;
		pageUtil.generateNewTriplifyPage();
		
	},
	
	database : function() {
		
		var pageUtil = this.app.util.page;
		pageUtil.generateDatabasePage();
		
	},
	
	//repository page
	repository : function() {
		
		var pageUtil = this.app.util.page;
		var ontology = this.app.model.ontology;
		
		pageUtil.generateRepositoryPage();
		
		var repositories = $('.repositories');
		var rpContent = '';
		
		rpContent += '<div class="repository">';
		rpContent += '<div class="col-sm-1"></div>';
		rpContent += '<div class="col-sm-1"><b>Prefix</b></div>';
		rpContent += '<b>Namespace</b>';
		rpContent += '</div>';
		
		$.each(ontology.getRepositories(), function(index, repository) {
			rpContent += '<div class="repository">';
			rpContent += '<div class="col-sm-1"> <a class="edit-repository" alt="Edit"> <i class="fa fa-edit"></i> </a>';
			rpContent += '<a class="delete-repository" alt="Delete"> <i class="fa fa-trash-o"></i> </a> </div>';
			rpContent += '<div class="col-sm-1">' + repository.prefix + '</div> ' + repository.namespace;
			rpContent += '</div>';
		});
		
		repositories.append(rpContent);
		
	},
	
	//configuration page
	configuration : function() {
		
		var pageUtil = this.app.util.page;
		var configuration = this.app.dao.configuration;
		
		pageUtil.generateConfigurationPage();
		
		var conf = configuration.getFileConfiguration();
		
		console.log(JSON.stringify(conf));
		
		var databases = $('.databases'),
			tripleStores = $('.triple-stores');
		
		var tsContent = '',
			dbContent = '';
		
		dbContent += '<div class="database">';
		dbContent += '<div class="col-sm-2">Name</div><div class="col-sm-6">Endpoint</div><div class="col-sm-2">Username</div>Password';
		dbContent += '</div>';
		
		$.each(conf.databases, function(index, database) {
			dbContent += '<div class="database">';
			dbContent += '<div class="col-sm-2">' + database.name + '</div><div class="col-sm-6">' + database.endpoint + '</div><div class="col-sm-2">' + database.username + '</div>' + database.password;
			dbContent += '</div>';
		});
		
		databases.append(dbContent);
		
		
		tsContent += '<div class="triple-store"">';
		tsContent += '<div class="col-sm-2">Name</div><div class="col-sm-6">Endpoint</div><div class="col-sm-2">Username</div>Password';
		tsContent += '</div>';
		
		$.each(conf.tripleStores, function(index, tripleStore) {
			tsContent += '<div class="triple-store">';
			tsContent += '<div class="col-sm-2">' + tripleStore.name + '</div><div class="col-sm-6">' + tripleStore.endpoint + '</div><div class="col-sm-2">' + tripleStore.username + '</div>' + tripleStore.password;
			tsContent += '</div>';
		});
		
		tripleStores.append(tsContent);
		
	},
	
	documentation : function() {
		
		var pageUtil = this.app.util.page;
		pageUtil.generateDocumentationPage();
		
	}
	
});