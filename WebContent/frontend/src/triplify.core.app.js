triplify.core.App = Backbone.Model.extend({
	
	//CORE
	model : {
		page : new triplify.core.Page,
		ontology: new triplify.core.Ontology,
	},
	
	// DAO
	dao : {
		configuration : new triplify.dao.Configuration,
		stardog : new triplify.dao.Stardog,
	},

	// UTIL
	util : {
		page : new triplify.util.Page,
		dialog : new triplify.util.Dialog,
	},
	
	initialize : function() {
		console.log('App Started!');
	},
	
	start : function() {
		
		this.model.page.setApp(this);
		
	},
	
	//dashboard page
	dashboard : function() {
		
		var page = this.model.page;
		page.dashboard();
		
	},
	
	newTriplify : function() {
		
		var page = this.model.page;
		page.newTriplify();
		
	},
	
	database : function() {
		
		var page = this.model.page;
		page.database();
		
	},
	
	repository : function() {
		
		var $this = this;
		
		var page = this.model.page;
		var ontology = this.model.ontology;
		var dialog = this.util.dialog;
		
		page.repository();
		
		var newRepository = $('.new-repository');
		newRepository.click(function() {
			dialog.generateRepositoryDialog();
			generateDialogProcedures();
		});
		
		var editRepository = $('.edit-repository');
		editRepository.click(function(){
			var prefix = $(this).parent().siblings('.r-prefix').text();
			var namespace = $(this).parent().siblings('.r-namespace').text();
			
			dialog.generateRepositoryDialog();
			generateDialogProcedures();
			
			$('.namespace').val(namespace);
			$('.prefix').val(prefix);
			
			console.log(namespace);
			console.log(prefix);
		});
		
		var deleteRepository = $('.delete-repository');
		deleteRepository.click(function(){
			var prefix = $(this).parent().siblings('.r-prefix').text();
			var namespace = $(this).parent().siblings('.r-namespace').text();
		});
		
		function generateDialogProcedures() {
			
			var testConnection = $('.test-connection');
			testConnection.click(function() {
				
				var namespace = $('.namespace').val();
				var messageContent = ontology.testConnection(namespace);
				
				var message = $('.message');
				message.empty();
				message.append(messageContent);
				
			});
			
			var save = $('.save-repository');
			save.click(function(){
				
				var namespace = $('.namespace').val();
				var prefix = $('.prefix').val();
				
				if(prefix === '' || namespace === '') {
					alert('Please Enter Prefix and Namespace');
				}
				else {
					var result = ontology.update(prefix, namespace);
					if(result === 'OK!') {
						$('#myModal').modal('hide');
					}
					else {
						alert('Failure on import the ontology!')
					}
				}
			});
			
			$('#myModal').on('hidden.bs.modal', function (e) {
				$this.repository();
			});
			
		}
		
	},
	
	configuration : function() {
		
		var page = this.model.page;
		page.configuration();
		
	},
	
	documentation : function() {
		
		var page = this.model.page;
		page.documentation();
		
	}
	
});