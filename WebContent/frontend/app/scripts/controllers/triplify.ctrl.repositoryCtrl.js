angular.module("triplifyApp").controller("repositoryCtrl", function ($scope, ModalService) {
	
	$scope.ontology = new triplify.model.Ontology();
	
	$scope.show = function() {
        ModalService.showModal({
            templateUrl: 'modal.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };
    
});

