
angularFormsApp.directive('employeeBaseform',
    function () {

        return {
            restrict: 'E',
            templateUrl: 'app/EmployeeForm/formbase.html'
        }

    });

angularFormsApp.directive('employeeProform',
  function () {

    return {
      restrict: 'E',
      templateUrl: 'app/EmployeeForm/formpro.html'
    }

  });