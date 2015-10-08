angular.module("triplifyApp").controller('modalRepositoryCtrl', function($scope, close, repository, sharedOntology) {
	
	$scope.ontology = sharedOntology.getOntology();
	
	if(repository) {
		$scope.repository = repository;
	}
	
	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};
	
	$scope.addNewRepository = function(repository) {
		if(repository && repository.namespace) {
			var result = $scope.ontology.testConnection(repository.namespace);
			if(result === 'OK!') {
				$scope.ontology.update(repository);
			}
		}
	};
	
	$scope.test = function(repository) {
		if(repository && repository.namespace) {
			$scope.test.message = $scope.ontology.testConnection(repository.namespace);
		}
		else {
			$scope.test.message = 'Fail!';
		}
		
	}
	
});