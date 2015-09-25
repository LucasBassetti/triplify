<jsp:include page="../../template/template.jsp" />

<script>

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
		
		var documentation = $('.documentation');
		documentation.addClass('active');
		
</script>