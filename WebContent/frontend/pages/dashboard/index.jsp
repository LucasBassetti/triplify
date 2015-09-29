<jsp:include page="../../template/template.jsp" />

<script>

		$(window).load(function() {
			
			var app = new triplify.core.App;
			app.start();
			
			app.dashboard();
			
			$('#page-dashboard').click(function(){
				app.dashboard();
			});
			
			$('#page-new-triplify').click(function(){
				app.newTriplify();
			});
			
			$('#page-ontology-repository').click(function(){
				app.repository();
			});
			
			$('#page-databases').click(function(){
				app.database();
			});
			
			$('#page-configuration').click(function(){
				app.configuration();
			});
			
			$('#page-documentation').click(function(){
				app.documentation();
			});
			
			
		});
		
</script>