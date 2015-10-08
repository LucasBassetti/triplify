angular.module("triplifyApp").controller("repositoryCtrl", function ($scope, ModalService, sharedOntology) {
	
	$scope.ontology = sharedOntology.getOntology();

	$scope.show = function(repository) {
		
		console.log('EDIT: ' + JSON.stringify(repository));
		
        ModalService.showModal({
            templateUrl: 'modal.html',
            controller: "modalController",
        	inputs: {
        		repository : repository
	        }
        }).then(function(modal) {
            modal.element.modal();
//            modal.close.then(function(result) {
//                $scope.message = "You said " + result;
//            });
        });
    };
    
    $scope.deleteRepository = function(repository) {
    	$scope.ontology.deleteRepository(repository);
    };
    
});

