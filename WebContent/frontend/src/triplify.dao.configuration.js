triplify.dao.Configuration = Backbone.Model.extend({
	
	initialize : function() {
		console.log('Stardog Started!');
	},
	
	getFileConfiguration : function(){
		
		var configuration = undefined;

		$.ajax({
			type: "POST",
			async: false,
			url: 'getConfigurationFile.htm',
			dataType: 'json',
			success: function(data) {
				configuration = data;
			},
			error: function() {

			}
		})

		
		return configuration;
	},

});