angularFormsApp.controller('FormPro', FormPro);

FormPro.$inject = ['$scope', 'efService', '$uibModalInstance']

function FormPro($scope, efService, $uibModalInstance) {

  $scope.employee = efService.employee;

  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  $scope.options = {
    minDate: new Date(),
    showWeeks: true
  };

  $scope.submitForm = function() {

  }

  $scope.cancleForm = function() {
    $uibModalInstance.dismiss('cancel');
  }

}