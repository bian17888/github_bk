angularFormsApp.controller('FormBase', FormBase);

FormBase.$inject = ['$scope', 'efService', '$uibModalInstance']

function FormBase($scope, efService, $uibModalInstance) {

  $scope.employee = efService.employee;

  $scope.departments = [
    "Engineering",
    "Marketing",
    "Finance",
    "Administration"
  ];

  $scope.submitForm = function() {
    console.log($scope.baseForm);
    console.log($scope.employee);
  }

  $scope.cancleForm = function() {
    $uibModalInstance.dismiss('cancel');
  }

}