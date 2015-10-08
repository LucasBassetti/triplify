var triplify = triplify || {};

triplify.model.Configuration = (function() {
	
	"use strict";
	
	var Configuration = function() {
		
		
	};
	
	Configuration.prototype = {
		
			getConfigurationFile : function() {
				
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

			testConnection : function() {
				
				$.ajax({
					type: "POST",
					async: false,
					url: 'testMySQLConnection.htm',
					data: {
						'endpoint' : 'localhost',
						'username' : 'root',
						'password' : 'root'
					},
					success: function(connected) {
						if(connected === 'true') {
							console.log('Database connected!');
						}
						else {
							console.log('Connection Fail!');
						}
					},
					error: function() {

					}
				})

				
			},
		
	};
	
	return Configuration;
	
})();