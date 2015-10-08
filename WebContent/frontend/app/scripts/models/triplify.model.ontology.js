var triplify = triplify || {};

triplify.model.Ontology = (function() {
	
	"use strict";
	
	var Ontology = function() {
		
		var $this = this; 
		
		this.repositories = [];
		this.entities = [];
		
		//initialize repositories and entities
		_ajaxPost('checkOntologyFileExist.htm', null, function(exist) {
			if(JSON.stringify(exist) === 'false') {
				
				$this.repositories = _setDefaultRepositories();
				console.log(JSON.stringify($this.repositories));
				
				$.each($this.repositories, function(index, repository) {
					var ontology = $this.getOntologyByURI(repository.namespace);
					$this.addEntities(ontology, repository.prefix);
				});
				
				$this.createFile();
			}
			else {
				$this.loadEntities();
				$this.loadRepositories();
			}
		})
		
	};
	
	Ontology.prototype = {
			
		
		update : function(repository) {
			
			this.addRepository(repository);
			
			var ontology = this.getOntologyByURI(repository.namespace);
			this.addEntities(ontology, repository.prefix);
			
			this.updateFile();
			
		},
		
		updateFile : function() {
			this.createFile();
		},
		
		createFile : function() {
			
			var repositories = angular.copy(this.repositories); 
			var entities = angular.copy(this.entities); 
			
			var data = {
				'repositories' : JSON.stringify(repositories),
				'entities' : JSON.stringify(entities)
			}
				
			_ajaxPost('createOntologyFile.htm', data, function(){});
			
		},
		
		deleteRepository : function(repository) {
			
			var repositories = angular.copy(this.repositories);
			var repositoryCopy = angular.copy(repository);
			
			repositories = repositories.filter(function(rep) {
				return JSON.stringify(rep) !== JSON.stringify(repositoryCopy);
			});
			
			this.repositories = repositories;
			this.entities = this.deleteEntities(repository.prefix);
			
			this.updateFile();
		},
		
		deleteEntities : function(prefix) {
			
			var entities = angular.copy(this.entities);
			
			entities = entities.filter(function(entity) {
				return entity.category !== prefix;
			});
			
			return entities;
		},
		
		setRepositories : function(repositories) {
			this.repositories = repositories;
		},
			
		loadRepositories : function() {
	
			var $this = this; 
			
			_ajaxPost('openOntologyRepositoriesFile.htm', null, function(data) {
				$this.repositories = data;
			});
			
		},
		
		loadEntities : function() {
			
			var $this = this; 
			
			_ajaxPost('openOntologyEntitiesFile.htm', null, function(data) {
				$this.entities = data;
			});
			
		},
		
		getOntologyByURI : function(uri) {
			
			/*
			 * rdf : http://www.w3.org/1999/02/22-rdf-syntax-ns#
			 * rdfs : http://www.w3.org/2000/01/rdf-schema#
			 * owl : http://www.w3.org/2002/07/owl#
			 */
			var $this = this; 
			
			var ontology = [];
			
			_ajaxPost('http://rdf-translator.appspot.com/convert/xml/json-ld/' + uri, null, function(data) {
//				console.log(JSON.stringify(data));
				ontology = data;
			});
			
			return ontology;
			
		},
		
		addRepository : function(repository) {
			this.repositories.push({
				'prefix' : repository.prefix,
				'namespace' : repository.namespace
			})
			
			console.log(JSON.stringify(this.repositories));
		},
		
		addEntities : function(ontology, prefix) {
			
			var $this = this; 
			
			if(!ontology['@graph']) { return; }
				
			$.each(ontology['@graph'], function(index, entity) {
				$this.entities.push({
					'label' : entity['@id'],
					'category' : prefix
				});
			})
			
		},
		

		testConnection : function(uri) {
			
			var result = '';
			
			$.ajax({
				type: 'GET',
				async: false,
				url: 'http://rdf-translator.appspot.com/convert/xml/json-ld/' + uri,
				success: function(data) {
					result = 'OK!';
				},
				error: function(data) {
					result = 'Fail!';
				}
			});
			
			return result;
		}
		
	};
	
	/* 
	 * ================
	 * PRIVATE METHODS
	 * ================
	 */
	
	var _setDefaultRepositories = function() {
		
		var repositories = [];
		
		repositories.push({
			'prefix' : 'rdf',
			'namespace' : 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
		},
		{
			'prefix' : 'rdfs',
			'namespace' : 'http://www.w3.org/2000/01/rdf-schema#'
		},
		{
			'prefix' : 'owl',
			'namespace' : 'http://www.w3.org/2002/07/owl#'
		},
		{
			'prefix' : 'skos',
			'namespace' : 'http://www.w3.org/2004/02/skos/core#'
		},
		{
			'prefix' : 'foaf',
			'namespace' : 'http://xmlns.com/foaf/0.1/'
		},
		{
			'prefix' : 'dc',
			'namespace' : 'http://purl.org/dc/elements/1.1/'
		});
		
		return repositories;
	};
	
	var _ajaxGet = function(url, parameters, successCallback) {
		
		$.ajax({
            type: 'GET',
            url: url,
            async: false,
            data: parameters,
            dataType: 'json',
            success: successCallback,
            error: function() {
                console.log('error');
            }
        });
		
	};
	
	var _ajaxPost = function(url, parameters, successCallback) {
		
		$.ajax({
            type: 'POST',
            url: url,
            async: false,
            data: parameters,
            dataType: 'json',
            success: successCallback,
            error: function() {
                console.log('error');
            }
        });
		
	};
	
	return Ontology;
	
})();