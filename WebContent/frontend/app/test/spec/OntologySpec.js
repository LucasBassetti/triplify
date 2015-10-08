"use strict";

var Ontology = triplify.model.Ontology;

describe("triplify Ontology object", function () {
	it("must have Ontology repository", function () {
		expect(triplify.model.Ontology).toBeDefined();
	});
});

describe("Create Ontology ontologyule successfully", function () {

	it("without arguments", function () {
		var ontology = new Ontology();
		expect(ontology).toEqual(jasmine.any(Object));
	});

});

describe("Ontology repositories", function () {
	
	var ontology = new Ontology();
	
	it("must be a array", function() {
		expect(ontology.repositories).toEqual(jasmine.any(Array));
	});
	
	it("must delete a repository", function() {
		 
		 var repository = {
			'prefix' : 'fake',
			'namespace' : 'http://www.fakenamespace.com'
		};
		 
		ontology.repositories.push(repository) 
		var repositories = ontology.repositories;
		
		ontology.deleteRepository(repository);
		expect(JSON.stringify(ontology.repositories)).not.toEqual(JSON.stringify(repositories));
	});
		
});

describe("A spy", function() {
	
	var ontology = new Ontology();
	var repositories = undefined;

	beforeEach(function() {
		spyOn(ontology, 'loadRepositories');
		repositories = ontology.loadRepositories()
	});
	
	it("tracks that the spy was called", function() {
		expect(ontology.loadRepositories).toHaveBeenCalled();
	});

	 it("tracks all the arguments of its calls", function() {
		expect(ontology.loadRepositories).toHaveBeenCalledWith();
	 });
	 
});