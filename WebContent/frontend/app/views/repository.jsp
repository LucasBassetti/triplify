<section class="content-header">
	<h1>Triplify</h1>
	<ol class="breadcrumb">
		<li><a href="painel.htm"><i class="fa fa-database"></i>
				Triplify</a></li>
		<li class="active">Ontology Repository</li>
	</ol>
</section>
<section class="content ontology-repository">
	<div class="row">
		<div class="col-xs-12">
			<div class="box box-solid box-primary">
				<div class="box-header">
					<i class="fa fa-share-alt fa-fw"></i>
					<h3 class="box-title">Ontology Repository</h3>
				</div>
				<div class="box-body">
					<a class="btn btn-social btn-primary new-repository" ng-click="show()">
						<i class="fa fa-plus fa fw"></i> New
					</a>
					<div class="repositories">
						<table class="table table-bordered table-striped table-hover dataTable">
							<tr>
								<th style="width: 100px"></th>
								<th style="width: 100px">Prefix</th>
								<th>Namespace</th>
							</tr>
							<tr ng-repeat="repository in ontology.repositories">
								<td style="text-align: center"><a class="edit-repository" alt="Edit" ng-click="show(repository)"> <i class="fa fa-edit"></i> 
								<a class="delete-repository" alt="Delete" ng-click="deleteRepository(repository)"> <i class="fa fa-trash-o"></i> </a></td>
								<td>{{repository.prefix}}</td>
								<td>{{repository.namespace}}</td>						
							</tr> 
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- modal -->
	<div ng-include="'/triplify/frontend/app/views/modalRepositoryContent.jsp'"></div>
	
</section>
