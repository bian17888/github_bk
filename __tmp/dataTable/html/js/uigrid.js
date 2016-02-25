var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.gridOptions = {};
	$scope.gridOptions.enableCellEditOnFocus = false;

	$scope.gridOptions.columnDefs = [
		{name: 'id', width: 50, enableCellEdit: false},
		{name: 'age', width: 200},
		{name: 'address.city', width: 300},
		{name: 'name', width: 200}
	];

	$http.get('/data/500_complex.json')
		.success(function (data) {
			$scope.gridOptions.data = data;
			console.log('=========')
			console.log($scope.gridOptions.data[0].age)
		});

	$scope.currentFocused = "";

	$scope.getCurrentFocus = function () {
		var rowCol = $scope.gridApi.cellNav.getFocusedCell();
		if (rowCol !== null) {
			$scope.currentFocused = 'Row Id:' + rowCol.row.entity.id + ' col:' + rowCol.col.colDef.name;
		}
	}
	
	$scope.msg = {};
	$scope.gridOptions.onRegisterApi = function (gridApi) {

		$scope.gridApi = gridApi;
          gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){

          	var temp = $scope.gridOptions.data[0].age;
          	console.log(typeof temp);
          	if( temp === '50'){
          		console.log('success');
          		$scope.msg.lastCellEdited = 'edited row id:' + rowEntity.id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
            	$scope.$apply();
          	} else {
          		console.log('fail');
          		$scope.gridOptions.data[rowEntity.id][colDef.name] = oldValue;
          	}
          });

	};
}]);
