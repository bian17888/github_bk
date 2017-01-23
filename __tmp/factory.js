/**
 * @fileOverview script
 * @desc
 * @author bian17888 17/1/10 19:52
 */
(function () {
	'use strict';

	angular
		.module('app', [])
		.factory('factoryDemo', factoryDemo)
		.controller('Main', Main);

	function factoryDemo() {

		var service = {
			Greeter : Greeter
		};

		return service;
	}

	Main.$inject = ['factoryDemo'];

	/* @ngInject */
	function Main(factoryDemo) {
		var vm = this;
		vm.title = 'Main';

		activate();

		////////////////

		function activate() {
			var greet = new factoryDemo.Greeter('hi');
			vm.title = greet.greet('bian17888');
		}
	}

	//////////////////////////////////////////////////

	function Greeter(salut) {
		this.greet = function(name){
			return salut + ' ' + name;
		}
	}

})();

