<section class="content-header">
	<h1>Configuration</h1>
	<ol class="breadcrumb">
		<li><a href="painel.htm"><i class="fa fa-gear"></i>
				Configuration</a></li>
	</ol>
</section>
<section class="content configuration">
	<div class="row">
		<div class="col-xs-12">
			<div class="box box-solid box-primary">
				<div class="box-header">
					<i class="fa fa-gear fa-fw"></i>
					<h3 class="box-title">Databases Configuration</h3>
				</div>
				<div class="box-body">
					<a class="btn btn-social btn-primary" ng-click="showDatabase()"> <i
						class="fa fa-plus fa fw"></i> New
					</a>
					<div class="databases">
						<table class="table table-bordered table-striped table-hover dataTable">
							<tr>
								<th style="width: 10%"></th>
								<th style="width: 15%">Name</th>
								<th style="width: 35%">Endpoint</th>
								<th style="width: 20%">Username</th>
								<th style="width: 20%">Password</th>
							</tr>
							<tr ng-repeat="database in configuration.databases">
								<td style="text-align: center"><a class="edit-repository" alt="Edit" ng-click="showDatabase(database)"> <i class="fa fa-edit"></i> 
								<a class="delete-repository" alt="Delete" ng-click="deleteDatabase(database)"> <i class="fa fa-trash-o"></i> </a></td>
								<td>{{database.name}}</td>
								<td>{{database.endpoint}}</td>
								<td>{{database.username}}</td>
								<td>{{database.password}}</td>								
							</tr> 
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-xs-12">
			<div class="box box-solid box-primary">
				<div class="box-header">
					<i class="fa fa-gear fa-fw"></i>
					<h3 class="box-title">TripleStore Configuration</h3>
				</div>
				<div class="box-body">
					<a class="btn btn-social btn-primary" ng-click="showTripleStore()"> <i
						class="fa fa-plus fa fw"></i> New
					</a>
					<div class="triple-stores">
						<table class="table table-bordered table-striped table-hover dataTable">
							<tr>
								<th style="width: 10%"></th>
								<th style="width: 15%">Name</th>
								<th style="width: 35%">Endpoint</th>
								<th style="width: 20%">Username</th>
								<th style="width: 20%">Password</th>
							</tr>
							<tr ng-repeat="tripleStore in configuration.tripleStores">
								<td style="text-align: center"><a class="edit-repository" alt="Edit" ng-click="showTripleStore(tripleStore)"> <i class="fa fa-edit"></i> 
								<a class="delete-repository" alt="Delete" ng-click="deleteTripleStore(tripleStore)"> <i class="fa fa-trash-o"></i> </a></td>
								<td>{{tripleStore.name}}</td>
								<td>{{tripleStore.endpoint}}</td>
								<td>{{tripleStore.username}}</td>
								<td>{{tripleStore.password}}</td>								
							</tr> 
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- modal -->
	<div ng-include="'/triplify/frontend/app/views/modalConfigurationContent.jsp'"></div>
	
</section>
