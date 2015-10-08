"use strict";

var Ontology = triplify.model.Ontology;

describe("==== Describe Ontology Prototype ====", function () {

	describe("New Ontology", function () {
		it("Ontology Object => must be defined", function () {
			expect(Ontology).toBeDefined();
		});
	});
	
	describe("Ontology repositories var", function () {
		
		var ontology = new Ontology();
		
		it("Var repositories => must be a array", function() {
			expect(ontology.repositories).toEqual(jasmine.any(Array));
		});
		
		it("Method deleteRepository() => must delete a repository", function() {
			 
			 var repository = {
				'prefix' : 'fake',
				'namespace' : 'http://www.fake-namespace.com'
			};
			 
			ontology.repositories.push(repository) 
			var repositories = ontology.repositories;
			
			ontology.deleteRepository(repository);
			expect(JSON.stringify(ontology.repositories)).not.toEqual(JSON.stringify(repositories));
		});
			
	});
	
	describe("Ontology spy", function() {
		
		var ontology = new Ontology();
		var repositories = undefined;
	
		beforeEach(function() {
			spyOn(ontology, 'loadRepositories');
			repositories = ontology.loadRepositories()
		});
		
		it("Method loadRepositories() => tracks that the spy was called", function() {
			expect(ontology.loadRepositories).toHaveBeenCalled();
		});
	
//		 it("tracks all the arguments of its calls", function() {
//			expect(ontology.loadRepositories).toHaveBeenCalledWith();
//		 });
		 
	});
	
});