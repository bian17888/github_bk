/**
 * @fileOverview script
 * @desc
 * @author bian17888 17/1/10 19:52
 */
(function () {
	'use strict';

	angular
		.module('app', [])
		.config(configure)
		.provider('providerDemo', providerDemo)
		.controller('Main', Main);

	function configure(providerDemoProvider) {
		providerDemoProvider.config.salut = 'toto';
	}

	function providerDemo() {

		var self = this;

		this.config = {
			salut : 'hi'
		};

		this.greet = function(name){
			return self.config.salut + ' ' + name;
		};

		this.$get = function () {
			return {
				greet : self.greet
			}
		};

	}

	Main.$inject = ['providerDemo'];

	/* @ngInject */
	function Main(providerDemo) {
		var vm = this;
		vm.title = 'Main';

		activate();

		////////////////

		function activate() {
			var greet = providerDemo.greet('bian17888');
			vm.title = greet;
		}
	}

})();

