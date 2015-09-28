triplify.core.Ontology = Backbone.Model.extend({
	
	entities : [],
	repositories : [],
	
	initialize : function() {
		this.initializeOntologies();
	},
	
	initializeOntologies : function() {
		
		var $this = this;
		
		$.ajax({
			type: 'POST',
			async: false,
			url: 'checkOntologyFileExist.htm',
			success: function(exist) {
				console.log(exist);
				if(exist === 'false') {
					$this.createDefaultOntologyFile();
				}
				else {
					$this.loadEntities();
					$this.loadRepositories();
				}
			}
		});
		
	},
	
	createDefaultOntologyFile : function() {
		
		var $this = this;
		
		this.setDefaultRepositories();
		this.setDefaultEntities();
		
		$.ajax({
			type: 'POST',
			async: false,
			url: 'createOntologyFile.htm',
			data : {
				'repositories' : JSON.stringify($this.repositories),
				'entities' : JSON.stringify($this.entities)
			}
		})
		
	},
	
	loadEntities : function() {
		
		var $this = this;
		
		$.ajax({
			type: 'POST',
			async: false,
			url: 'openOntologyEntitiesFile.htm',
			dataType: 'json',
			success : function(data) {
				$this.entities = data;
			}
		})
	},
	
	loadRepositories : function() {
		
		var $this = this;
		
		$.ajax({
			type: 'POST',
			async: false,
			dataType: 'json',
			url: 'openOntologyRepositoriesFile.htm',
			success : function(data) {
				$this.repositories = data;
			}
		})
		
	},
	
	getRepositories : function() {
		return this.repositories;
	},
	
	setDefaultRepositories : function() {
		
		this.repositories.push({
			'prefix' : 'rdf',
			'namespace' : 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
		},
		{
			'prefix' : 'rdfs',
			'namespace' : 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
		},
		{
			'prefix' : 'owl',
			'namespace' : 'http://www.w3.org/2002/07/owl#',
		},
		{
			'prefix' : 'skos',
			'namespace' : 'http://www.w3.org/2004/02/skos/core#',
		},
		{
			'prefix' : 'foaf',
			'namespace' : 'http://xmlns.com/foaf/0.1/',
		},
		{
			'prefix' : 'dc',
			'namespace' : 'http://purl.org/dc/elements/1.1/',
		});
		
	},
	
	setDefaultEntities : function() {
		
		var $this = this;
		
		$.each($this.repositories, function(index, repository) {
			
			var ontology = $this.getOntologyByURI(repository.namespace);
			$this.addEntities(ontology);
			
		});
		
		console.log(JSON.stringify(this.entities));
		
	},
	
	addEntities : function(ontology) {
		
		var entities = this.entities;
		
		$.each(ontology['@graph'], function(index, entity) {
			entities.push(entity['@id'])
		})
		
	},

	getOntologyByURI : function(uri) {
		
		/*
		 * rdf : http://www.w3.org/1999/02/22-rdf-syntax-ns#
		 * rdfs : http://www.w3.org/2000/01/rdf-schema#
		 * owl : http://www.w3.org/2002/07/owl#
		 */
		
		var ontology = undefined;
		
		$.ajax({
			type: 'GET',
			async: false,
			url: 'http://rdf-translator.appspot.com/convert/xml/json-ld/' + uri,
			success: function(data) {
//				console.log(JSON.stringify(data));
				ontology = data;
			}
		});
		
		return ontology;
		
	},
	
	
});