<jsp:include page="../../template/template.jsp" />

<script>

		var content = 
	        '<section class="content-header">' + 
	    		'<h1> Triplify </h1>' +
	    		'<ol class="breadcrumb">' +
	        		'<li><a href="painel.htm"><i class="fa fa-database"></i> Triplify</a> </li>' +
	        		'<li class="active">New Triplify</li>' +
	    		'</ol>' +
			'</section>';
			
		content = content +
			'<section class="content">' +
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
		
		var triplify = $('.triplify');
		triplify.addClass('active');
		
</script>