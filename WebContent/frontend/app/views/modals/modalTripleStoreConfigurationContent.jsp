<script type="text/ng-template" id="modalTripleStoreConfiguration.html">
<div class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" ng-click="close(Cancel)"
					data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">New TripleStore Congifuration</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal new-database-configuration-database" role="form"> 
				<div class="form-group"> 
			      <label class="control-label col-sm-2">Name:</label> 
			      <div class="col-sm-10"> 
			        <select class="form-control" id="sel1" ng-model="selectedOption" ng-options="option as option for option in options.tripleStores">
  					</select>
			      </div> 
			   </div> 
			    <div class="form-group"> 
			      <label class="control-label col-sm-2">Endpoint:</label> 
			      <div class="col-sm-10"> 
			        <input class="form-control" placeholder="Enter endpoint" ng-model="tripleStore.endpoint" > 
			      </div> 
			   </div> 
			   <div class="form-group"> 
			      <label class="control-label col-sm-2">Username:</label> 
			      <div class="col-sm-10">           
			        <input class="form-control" placeholder="Enter username" ng-model="tripleStore.username"> 
			      </div> 
			    </div> 
 				<div class="form-group"> 
			      <label class="control-label col-sm-2">Password:</label> 
			      <div class="col-sm-10">           
			        <input class="form-control" placeholder="Enter password" ng-model="tripleStore.password"> 
			      </div> 
			    </div> 
			    <div class="form-group"> 
				    <div class="col-sm-offset-2 col-sm-2"> 
				      <button type="button" class="btn btn-default test-connection" ng-click="testTripleStore(tripleStore)">Test Connection</button> 
				    </div> 
				    <div class="col-sm-8 message">{{test.message}}</div> 
				  </div> 
			  </form>
			</div>
			<div class="modal-footer">
				<button type="button" ng-click="close()" class="btn btn-default"
					data-dismiss="modal">Cancel</button>
				<button type="button" ng-click="addNewTripleStore(tripleStore)"
					class="btn btn-primary" data-dismiss="modal">Save</button>
			</div>
		</div>
	</div>
</div>
</script>