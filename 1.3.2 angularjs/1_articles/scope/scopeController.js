/**
 * 参见文章 : [Angular浅入深出系列 - 作用域] http://www.atatech.org/articles/46737
 */

var scopeModule = angular.module('scopeApp', []);

// 允许全局 $rootScope
scopeModule.config(['$controllerProvider', function ($controllerProvider) {
	$controllerProvider.allowGlobals();
}]);

/**
 * 控制器 : message01Ctrl , message02Ctrl
 * @desc 用于演示 作用域隔离 与 全局作用域
 */
scopeModule.controller('message1Ctrl', function ($scope) {
	$scope.message1 = 'message1Ctrl';
});

scopeModule.controller('message2Ctrl', function ($scope, $rootScope) {
	$scope.message2 = 'message2Ctrl';
	$rootScope.message0 = 'rootScope';
});

/**
 * 控制器 : parent1Ctrl , child1Ctrl
 * @desc 用于演示 嵌套作用域 string 类型 ( 父类修改, 不对子类造成影响 -> hello字段 )
 */
scopeModule.controller('parent1Ctrl', function ($scope) {
	$scope.name = 'parent';
	$scope.hello = 'parent hello';
});

scopeModule.controller('child1Ctrl', function ($scope) {
	$scope.childName = 'child';
});

/**
 * 控制器 : parent2Ctrl , child2Ctrl
 * @desc 用于演示 嵌套作用域 obj 类型 ( 父类对子类造成影响 -> hello字段 )
 */
scopeModule.controller('parent2Ctrl', function ($scope) {
	$scope.info = {
		name : 'parent',
		hello: 'parent hello'
	}
});

scopeModule.controller('child2Ctrl', function ($scope) {
	$scope.info.childName = 'child';
	$scope.info.hello = 'child hello';
});

/**
 * 控制器 : watchCtrl
 * @desc 用于演示 $watch 方法
 */
scopeModule.controller('watchCtrl', function ($scope) {
	$scope.values = [1,2];
	$scope.newValue = 1;

	$scope.add = function () {
		$scope.values.push($scope.newValue);
	};

	$scope.$watch('values', function(){
		$scope.sum = $scope.values.reduce(function (a, b) {
			return a + b;
		})
	},true);

});

/**
 * 控制器 : applyCtrl
 * @desc $apply 用法
 */
scopeModule.controller('applyCtrl', function ($scope, $element) {
	$scope.message = 'default message';
	$element.bind('keypress', function (event) {
		if (event.keyCode === 27) {
			$scope.$apply(function () {
				$scope.message = '';
			})
		} 
	})
});