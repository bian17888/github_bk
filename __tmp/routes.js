/**
 * @fileOverview routes
 * @desc
 * @author bian17888 17/1/11 10:11
 */
(function () {
	'use strict';

	angular
		.module('app', ['ngRoute'])
		.config(configure)
		.run(appRun)
		.provider('routehelperConfig', routehelperConfig)
		.factory('routehelper', routehelper)
		.controller('Main', Main)

	/**
	 * @func config - configure
	 */
	configure.$inject = ['$locationProvider', '$routeProvider', 'routehelperConfigProvider'];
	function configure($locationProvider, $routeProvider, routehelperConfigProvider) {
		routehelperConfigProvider.config.$routeProvider = $routeProvider;
	}

	/**
	 * @func run - appRun
	 */
	appRun.$inject = ['routehelper'];
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
		//////////////////////////////////////////////////
		function getRoutes() {
			return [
				{
					url   : '/books',
					config: {
						templateUrl : 'books.html',
						controller  : 'Books',
						controllerAs: 'vm'
					}
				}
			]
		}
	}

	/**
	 * @func provider - routehelperConfig
	 */
	function routehelperConfig() {
		var self = this;
		this.config = {
			// These are the properties we need to set
			// $routeProvider: undefined
		};
		this.$get = function () {
			return {
				config: self.config
			}
		}
	}

	/**
	 * @func factory - routehelper
	 */
	routehelper.$inject = ['routehelperConfig'];
	function routehelper(routehelperConfig) {
		var $routeProvider = routehelperConfig.config.$routeProvider;
		var service = {
			configureRoutes: configureRoutes
		};
		return service;
		//////////////////////////////////////////////////
		function configureRoutes(routes) {
			routes.forEach(function (route) {
				$routeProvider.when(route.url, route.config);
			});
			//$routeProvider.otherwise({redirectTo: '/'});
		}
	}

	/**
	 * @func controller - Main
	 */
	function Main() {
		var vm = this;
		vm.title = 'hi';
	}

})();