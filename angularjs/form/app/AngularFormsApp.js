
var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(routesConfig)

routesConfig.$inject = ['$routeProvider'];

function routesConfig ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl : 'app/Home.html',
      controller : 'HomeController'
    })
    .otherwise({redirectTo : '/home'});
}


angularFormsApp.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$uibModal'];

function HomeController($scope, $uibModal) {
  $scope.formBase = function() {
    $uibModal.open({
      templateUrl : 'app/EmployeeForm/formbase.html',
      controller : FormBase
    })
  }

  $scope.formPro = function() {
    $uibModal.open({
      templateUrl : 'app/EmployeeForm/formpro.html',
      controller : FormPro
    })
  }
}