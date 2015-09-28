<jsp:include page="../../template/template.jsp" />

<script>

		$(window).load(function() {
			
			var page = new triplify.core.Page;
			page.dashboard();
			
			$('#page-dashboard').click(function(){
				page.dashboard();
			});
			
			$('#page-new-triplify').click(function(){
				page.newTriplify();
			});
			
			$('#page-ontology-repository').click(function(){
				page.repository();
			});
			
			$('#page-databases').click(function(){
				page.database();
			});
			
			$('#page-configuration').click(function(){
				page.configuration();
			});
			
			$('#page-documentation').click(function(){
				page.documentation();
			});
			
			
		});
		
</script>