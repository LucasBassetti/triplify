triplify.util.Page = Backbone.Model.extend({
	
	initialize : function() {
		console.log('Page Util Started!');
	},

	
	generateDashboardPage : function() {
		
		var content = 
	        '<section class="content-header">' + 
	    		'<h1> Dashboard <small>Control panel</small> </h1>' +
	    		'<ol class="breadcrumb">' +
	        		'<li class="active"><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a> </li>' +
// 	        		'<li class="active">Dashboard</li>' +
	    		'</ol>' +
			'</section>';
			
		var contentWrapper = $('.content-wrapper');
		contentWrapper.empty();
		contentWrapper.append(content);
		
	},
	
	generateNewTriplifyPage : function() {

		var content = 
	        '<section class="content-header">' + 
	    		'<h1> Triplify </h1>' +
	    		'<ol class="breadcrumb">' +
	        		'<li><a href="painel.htm"><i class="fa fa-database"></i> Triplify</a> </li>' +
	        		'<li class="active">New Triplify</li>' +
	    		'</ol>' +
			'</section>';
			
		content = content +
			'<section class="content new-triplify">' +
				'<div class="row">' +
					'<div class="col-xs-12">' +
						'<div class="box box-solid box-primary">' +
							'<div class="box-header">' +
								'<i class="fa fa-database fa-fw"></i> <h3 class="box-title">Triplify</h3>' +
							'</div>' +
							'<div class="box-body">' +
								'<a href="#" class="btn btn-social btn-primary"> ' +
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
			'<section class="content ontology-repository">' +
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
								'<div class="repositories"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</section>';
			
		var contentWrapper = $('.content-wrapper');
		contentWrapper.empty();
		contentWrapper.append(content);
		
	},
	
	generateConfigurationPage : function() {
		
		var content = 
	        '<section class="content-header">' + 
	    		'<h1> Configuration </h1>' +
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
		
	},

	generateDatabasePage : function() {
		
		var content = 
	        '<section class="content-header">' + 
	    		'<h1> Triplify </h1>' +
	    		'<ol class="breadcrumb">' +
	        		'<li><a href="painel.htm"><i class="fa fa-database"></i> Triplify</a> </li>' +
	        		'<li class="active">Databases</li>' +
	    		'</ol>' +
			'</section>';
			
		content = content +
			'<section class="content">' +
				'<div class="row">' +
					'<div class="col-xs-12">' +
						'<div class="box box-solid box-primary">' +
							'<div class="box-header">' +
								'<i class="fa fa-database fa-fw"></i> <h3 class="box-title">Databases</h3>' +
							'</div>' +
							'<div class="box-body">' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</section>';
			
		var contentWrapper = $('.content-wrapper');
		contentWrapper.empty();
		contentWrapper.append(content);
		
	},
	
	generateDocumentationPage : function() {
		
		var content = 
	        '<section class="content-header">' + 
	    		'<h1> Documentation </h1>' +
	    		'<ol class="breadcrumb">' +
	        		'<li class="active"><a href="index.htm"><i class="fa fa-book"></i> Documentation</a> </li>' +
	    		'</ol>' +
			'</section>';
			
		var contentWrapper = $('.content-wrapper');
		contentWrapper.empty();
		contentWrapper.append(content);
		
	},
	
});