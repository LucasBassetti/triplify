<script type="text/ng-template" id="modalRepository.html">
<div class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" ng-click="close(Cancel)"
					data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">New Ontology Repository</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal new-ontology-repository" role="form"> 
			    <div class="form-group"> 
			      <label class="control-label col-sm-2">Prefix:</label> 
			      <div class="col-sm-10"> 
			        <input type="prefix" class="form-control prefix" placeholder="Enter prefix" ng-model="repository.prefix" > 
			      </div> 
			   </div> 
			   <div class="form-group"> 
			      <label class="control-label col-sm-2">Namespace:</label> 
			      <div class="col-sm-10">           
			        <input type="namespace" class="form-control namespace" placeholder="Enter namespace" ng-model="repository.namespace"> 
			      </div> 
			    </div> 
			    <div class="form-group"> 
				    <div class="col-sm-offset-2 col-sm-2"> 
				      <button type="button" class="btn btn-default test-connection" ng-click="test(repository)">Test</button> 
				    </div> 
				    <div class="col-sm-8 message">{{test.message}}</div> 
				  </div> 
			  </form>
			</div>
			<div class="modal-footer">
				<button type="button" ng-click="close()" class="btn btn-default"
					data-dismiss="modal">Cancel</button>
				<button type="button" ng-click="addNewRepository(repository)"
					class="btn btn-primary" data-dismiss="modal">Save</button>
			</div>
		</div>
	</div>
</div>
</script>