/**
 * @fileOverview
 * @author bian17888 16/2/17 16:59
 */

function NgclassController($scope) {
	$scope.messageText = "默认状态";
	$scope.isError = false;
	$scope.isWarning = false;

	$scope.errorTip = function(){
		$scope.messageText = "error状态";
		$scope.isError = true;
		$scope.isWarning = false;
	};

	$scope.warningTip = function(){
		$scope.messageText = "warning状态";
		$scope.isError = false;
		$scope.isWarning = true;
	};


	$scope.directory = [
		{"name" : "xx01", "cuisine" : "BBQ"},
		{"name" : "xx02", "cuisine" : "BBQ2"},
		{"name" : "xx03", "cuisine" : "BBQ3"},
		{"name" : "xx04", "cuisine" : "BBQ4"},
	]
	$scope.trActive = function (index) {
		$scope.num = index;
	}
}