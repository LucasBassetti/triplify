var triplify = triplify || {};

triplify.model.Ontology = (function() {
	
	"use strict";
	
	var Ontology = function() {
		this.repositories = this.loadRepositories();
	};
	
//	Ontology.prototype.initializeOntologies = function() {
//		
//		_ajaxPost('checkOntologyFileExist.htm', null, function(exist){
//			if(exist === 'false') {
////				$this.createDefaultOntologyFile();
//			}
//			else {
////				$this.loadEntities();
////				$this.loadRepositories();
//			}
//		})
//		
//	};
	
	Ontology.prototype = {
			
		loadRepositories : function() {
	
			var repositories = [];
			
			_ajaxPost('openOntologyRepositoriesFile.htm', null, function(data){
				repositories = data;
			});
			
			return repositories;
		},
		
		
	}
	
	var _ajaxPost = function(url, parameters, successCallback) {
		
        $.ajax({
            type: 'POST',
            url: url,
            async: false,
            data: JSON.stringify(parameters),
            contentType: 'application/json;',
            dataType: 'json',
            success: successCallback,
            error: function(xhr, textStatus, errorThrown) {
                console.log('error');
            }
        });
        
	};
	
	return Ontology;
})();