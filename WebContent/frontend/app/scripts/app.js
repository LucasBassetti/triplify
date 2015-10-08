'use strict';

angular
  .module('triplifyApp', ['ngRoute', 'ui.bootstrap', 'angularModalService'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/repository', {
        templateUrl: 'frontend/app/views/repository.jsp',
        controller: 'repositoryCtrl'
      })
      .when('/configuration', {
        templateUrl: 'frontend/app/views/configuration.jsp',
        controller: 'configurationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('triplifyApp').service('sharedOntology', function() {
	
	var Ontology = new triplify.model.Ontology();
	
    return {
        getOntology: function() {
            return Ontology;
        },
        setOntology: function(newOntology) {
        	Ontology = newOntology;
        }
    }
});

angular.module('triplifyApp').service('sharedConfiguration', function() {
	
	var Configuration = new triplify.model.Configuration();
	console.log(JSON.stringify(Configuration));
	
    return {
        getConfiguration: function() {
            return Configuration;
        },
        setConfiguration: function(newConfiguration) {
        	Configuration = newConfiguration;
        }
    }
});