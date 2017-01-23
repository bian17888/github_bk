/**
 * @fileOverview script
 * @desc
 * @author bian17888 17/1/10 19:52
 */
(function () {
	'use strict';

	angular
		.module('app', [])
		.service('serviceDemo', serviceDemo)
		.controller('Main', Main);

	function serviceDemo() {
		this.salut = 'hi';
		this.greet = function (name) {
			return this.salut + '  ' + name
		};
	}

	serviceDemo.prototype.setSalutation = function (salut) {
		this.salut = salut;
	};

	Main.$inject = ['serviceDemo'];

	/* @ngInject */
	function Main(serviceDemo) {
		var vm = this;
		vm.title = 'Main';

		activate();

		////////////////

		function activate() {
			serviceDemo.setSalutation('hello');
			var greet = serviceDemo.greet('bian17888');
			vm.title = greet;
		}
	}

	//////////////////////////////////////////////////

	function Greeter(salut) {
		this.greet = function (name) {
			return salut + ' ' + name;
		}
	}

})();

