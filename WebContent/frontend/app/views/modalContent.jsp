
<!-- The actual modal template, just a bit o bootstrap -->
<script type="text/ng-template" id="modal.html">
<div class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" ng-click="close('Cancel')"
					data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">New Ontology Repository</h4>
			</div>
			<div class="modal-body">
				<p>It's your call...</p>
			</div>
			<div class="modal-footer">
				<button type="button" ng-click="close('No')" class="btn btn-default"
					data-dismiss="modal">No</button>
				<button type="button" ng-click="close('Yes')"
					class="btn btn-primary" data-dismiss="modal">Yes</button>
			</div>
		</div>
	</div>
</div>
</script>