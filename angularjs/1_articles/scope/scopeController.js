/**
 * 参见 : [Angular浅入深出系列 - 作用域] http://www.atatech.org/articles/46737
 */

angular.module('scopeApp', [])
	.controller('scopeController', function () {

		var self = this;
		self.greeting = {text: 'bian17888'};

	});