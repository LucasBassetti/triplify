"use strict";

var Ontology = triplify.model.Ontology;

describe("triplify Ontology object", function () {
	it("must have Ontology repository", function () {
		expect(triplify.model.Ontology).toBeDefined();
	});
});

describe("Create Ontology module successfully", function () {

	it("without arguments", function () {
		var mod = new Ontology();
		expect(mod).toEqual(jasmine.any(Object));
	});

});

describe("Ontology module loadRepositories", function () {
	
	var mod = new Ontology();
	
	it("must load a array", function () {
		expect(mod.loadRepositories()).toEqual(jasmine.any(Array));
	});
	
	 it("must return a array", function() {
		var repositories = mod.loadRepositories()
		expect(repositories).toEqual(jasmine.any(Array));
	 });
	
});

describe("A spy", function() {
	
	var mod = new Ontology();
	var repositories = undefined;

	beforeEach(function() {
		spyOn(mod, 'loadRepositories');
		repositories = mod.loadRepositories()
	});

	it("tracks that the spy was called", function() {
		expect(mod.loadRepositories).toHaveBeenCalled();
	});

	 it("tracks all the arguments of its calls", function() {
		expect(mod.loadRepositories).toHaveBeenCalledWith();
	 });
	 
});