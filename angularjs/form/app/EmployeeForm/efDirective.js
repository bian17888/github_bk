angularFormsApp.directive('employeeBaseform',
	function () {

		return {
			restrict   : 'E',
			templateUrl: 'app/EmployeeForm/formbase.html'
		}

	});

angularFormsApp.directive('employeeProform',
	function () {

		return {
			restrict   : 'E',
			templateUrl: 'app/EmployeeForm/formpro.html'
		}

	});

angularFormsApp.directive('username',
	function ($q, $timeout) {

		return {
			restrict: 'A',
			require : 'ngModel',
			link    : function (scope, ele, attrs, ctrl) {
				var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

				ctrl.$asyncValidators.username = function (modelValue, viewValue) {
					if(ctrl.$isEmpty(modelValue)){
						return $q.when();
					}

					var def = $q.defer();
					$timeout(function () {
						if(usernames.indexOf(modelValue) === -1){
							def.resolve();
						} else {
							def.reject();
						}
					},2000)
					return def.promise;
				}
			}
		}

	});