/**
 * @fileOverview promise
 * @desc
 * @author bian17888 16/12/29 10:59
 */
(function () {

	'use strict';

	angular
		.module('app', [])
		.controller('ctrHome', ctrHome)

	ctrHome.$inject = ['$scope', '$http', '$q'];
	function ctrHome($scope, $http, $q) {

		var apiUsers = 'https://api.github.com/users/',
			user1 = commonAjax({url: apiUsers + 'bian17888'}),
			user2 = commonAjax({url: apiUsers + 'kapral18'});

		var promise = [user1, user2];

		// 合并多个请求demo
		$q.all(promise).then(function (result) {
			console.log(result);
			$scope.data = result;
		});

		// christmas-tree 解决方案
		user1
			.then(function (result) {
				return result
			})
			.then(function (result) {
				return user2;
			})
			.then(function (result) {
				console.log(result);
			});

		//////////////////////////////////////////////////

		/**
		 * @func commonAjax
		 * @desc 公共ajax方法
		 * @param config
		 * @returns {*}
		 */
		function commonAjax(config) {
			var _config = {
				method: config.method || 'GET',
				url   : config.url || '',
				params: config.params || {},
				data  : config.data || {}
			};
			var errInfo = 'XHR Failed for api ' + config.url;

			return $http(_config)
				.then(commonAjaxComplete)
				.catch(function (message) {
					exception.catcher(errInfo)(message);
				});

			function commonAjaxComplete(data) {
				return data.data
			}
		}
	}

}());