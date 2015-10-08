angular.module("triplifyApp").controller('configurationCtrl', function($scope, ModalService, sharedConfiguration) {
	
	var configuration = sharedConfiguration.getConfiguration();
	$scope.configuration = configuration.getConfigurationFile();
	
	$scope.showDatabase = function(database) {
		console.log(JSON.stringify(database));
		
		ModalService.showModal({
            templateUrl: 'modalConfiguration.html',
            controller: "modalConfigurationCtrl",
        	inputs: {
        		database : database,
        		tripleStore : undefined
	        }
        }).then(function(modal) {
            modal.element.modal();
        });
	};
	
	$scope.deleteDatabase = function(database) {
		console.log(JSON.stringify(database));
	};
	
	$scope.showTripleStore = function(tripleStore) {
		console.log(JSON.stringify(tripleStore));
	};
	
	$scope.deleteTripleStore = function(tripleStore) {
		console.log(JSON.stringify(tripleStore));
	};
	
});