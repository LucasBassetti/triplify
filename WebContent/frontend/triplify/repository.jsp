<jsp:include page="../template/template.jsp" />

<script>

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
								'<i class="fa fa-database fa-fw"></i> <h3 class="box-title">Ontology Repository</h3>' +
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
		
		var triplify = $('.triplify');
		triplify.addClass('active');
		
</script>