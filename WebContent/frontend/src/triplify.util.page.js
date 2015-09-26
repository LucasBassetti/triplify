triplify.util.Page = Backbone.Model.extend({
	
	initialize : function() {
		console.log('Page Util Started!');
	},

	generateRepositoryPage : function() {
		
		var content = 
	        '<section class="content-header">' + 
	    		'<h1> Triplify </h1>' +
	    		'<ol class="breadcrumb">' +
	        		'<li><a href="painel.htm"><i class="fa fa-database"></i> Triplify</a> </li>' +
	        		'<li class="active">Ontology Repository</li>' +
	    		'</ol>' +
			'</section>';
			
		content = content +
			'<section class="content">' +
				'<div class="row">' +
					'<div class="col-xs-12">' +
						'<div class="box box-solid box-primary">' +
							'<div class="box-header">' +
								'<i class="fa fa-share-alt fa-fw"></i> <h3 class="box-title">Ontology Repository</h3>' +
							'</div>' +
							'<div class="box-body">' +
								'<a href="#" class="btn btn-social btn-primary new-repository"> ' +
									'<i class="fa fa-plus fa fw"></i> New ' +
								'</a>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</section>';
			
		var contentWrapper = $('.content-wrapper');
		contentWrapper.empty();
		contentWrapper.append(content);
		
		var triplify = $('.triplify');
		triplify.addClass('active');
		
	},
	
	generateConfigurationPage : function() {
		
		var content = 
	        '<section class="content-header">' + 
	    		'<h1> Triplify </h1>' +
	    		'<ol class="breadcrumb">' +
	        		'<li><a href="painel.htm"><i class="fa fa-gear"></i> Configuration</a> </li>' +
	    		'</ol>' +
			'</section>';
			
		content = content +
			'<section class="content configuration">' +
				'<div class="row">' +
					'<div class="col-xs-12">' +
						'<div class="box box-solid box-primary">' +
							'<div class="box-header">' +
								'<i class="fa fa-gear fa-fw"></i> <h3 class="box-title">Databases Configuration</h3>' +
							'</div>' +
							'<div class="box-body">' +
								'<a href="#" class="btn btn-social btn-primary"> ' +
									'<i class="fa fa-plus fa fw"></i> New ' +
								'</a>' +
								'<div class="databases"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				
				'<div class="row">' +
					'<div class="col-xs-12">' +
						'<div class="box box-solid box-primary">' +
							'<div class="box-header">' +
								'<i class="fa fa-gear fa-fw"></i> <h3 class="box-title">TripleStore Configuration</h3>' +
							'</div>' +
							'<div class="box-body">' +
								'<a href="#" class="btn btn-social btn-primary"> ' +
									'<i class="fa fa-plus fa fw"></i> New ' +
								'</a>' +
								'<div class="triple-stores"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</section>';
			
		var contentWrapper = $('.content-wrapper');
		contentWrapper.empty();
		contentWrapper.append(content);
		
		var triplify = $('.triplify');
		triplify.addClass('active');
		
	},

});