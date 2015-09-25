<jsp:include page="../../template/template.jsp" />

<script>

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
		
		var dashboard = $('.dashboard');
		dashboard.addClass('active');
		
</script>