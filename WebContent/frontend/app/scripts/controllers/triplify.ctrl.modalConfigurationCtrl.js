angular.module("triplifyApp").controller('modalConfigurationCtrl', function($scope, close, database, tripleStore, sharedConfiguration) {
	
	$scope.options = {
			databases : ["mysql"],
			tripleStores : ["stardog"],
	}
	
	var configuration = sharedConfiguration.getConfiguration();
	
	if(database) {
		$scope.database = database;
		$scope.selectedOption = database.name;
	}
	
	if(tripleStore) {
		$scope.tripleStore = tripleStore;
	}
	
	$scope.close = function(result) {
		close(result, 500); // close, but give 500ms for bootstrap to animate
	};
	
});