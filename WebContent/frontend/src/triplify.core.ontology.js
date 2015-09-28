triplify.core.Ontology = Backbone.Model.extend({
	
	entities : [],
	
	initialize : function() {
		this.setDefaultOntologies();
	},
	
	setDefaultOntologies : function() {
		
		var rdf = this.getOntologyByURI('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
		var rdfs = this.getOntologyByURI('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
		var owl = this.getOntologyByURI('http://www.w3.org/2002/07/owl#');
		
		this.addEntities(rdf);
		this.addEntities(rdfs);
		this.addEntities(owl);
		
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