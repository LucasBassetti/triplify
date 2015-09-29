triplify.util.Dialog = Backbone.Model.extend({
	
	defaultModalTemplate : undefined,
	
	initialize : function() {
		console.log('Dialog Util Started!');
		this.setModalTemplates();
	},
	
	setModalTemplates : function() {
		
		this.defaultModalTemplate = 
			'<div class="modalDialog">' +
				'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
				  '<div class="modal-dialog">' +
				    '<div class="modal-content">' +
				      '<div class="modal-header">' +
				        '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
				        '<h4 class="modal-title" id="myModalLabel"></h4>' +
				      '</div>' +
				      '<div class="modal-body"></div>' +
				      '<div class="modal-footer">' +
				        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
				        '<button type="button" class="btn btn-primary">Save</button>' +
				      '</div>' +
				    '</div>' +
				  '</div>' +
				'</div>' +
			'</div>';
		
	},
	
	generateRepositoryDialog : function() {
		
		var modalDialog = $('.modalDialog');
		
		if(modalDialog) {
			modalDialog.remove();
		}
		
		$('.content').append(this.defaultModalTemplate);
		
		
		var modalTitle = 'New Ontology Repository';
		var modalBody = 
			'<form class="form-horizontal new-ontology-repository" role="form">' +
			    '<div class="form-group">' +
			      '<label class="control-label col-sm-2" for="email">Prefix:</label>' +
			      '<div class="col-sm-10">' +
			        '<input type="prefix" class="form-control" id="email" placeholder="Enter prefix">' +
			      '</div>' +
			   '</div>' +
			   '<div class="form-group">' +
			      '<label class="control-label col-sm-2" for="pwd">Namespace:</label>' +
			      '<div class="col-sm-10">' +          
			        '<input type="namespace" class="form-control" id="pwd" placeholder="Enter namespace">' +
			      '</div>' +
			    '</div>' +
			    '<div class="form-group">' +
				    '<div class="col-sm-offset-2 col-sm-2">' +
				      '<button type="button" class="btn btn-default">Test</button>' +
				    '</div>' +
				    '<div class="col-sm-8 message"></div>' +
				  '</div>' +
			  '</form>';
			  
		
		$('.modal-title').append(modalTitle);
		$('.modal-body').append(modalBody);
		
		$('#myModal').modal('show');
	},
	
});