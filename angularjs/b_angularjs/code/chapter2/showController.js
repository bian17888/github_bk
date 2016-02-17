/**
 * @fileOverview
 * @author bian17888 16/2/17 16:59
 */

function ShowController($scope) {
	$scope.menuStatus = {
		show : true
	};

	$scope.toogleMenu = function(){
		$scope.menuStatus.show = !$scope.menuStatus.show;
	}
}