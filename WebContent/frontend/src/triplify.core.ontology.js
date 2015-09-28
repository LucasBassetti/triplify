triplify.core.Ontology = Backbone.Model.extend({
	
	entities : [],
	repositories : [],
	
	initialize : function() {
		
	},
	
	initializeDefaultOntologies : function() {
		this.setDefaultRepositories();
		this.setDefaultEntities();
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