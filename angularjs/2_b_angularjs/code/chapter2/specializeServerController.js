/**
 * @fileOverview
 * @author bian17888 16/2/17 16:59
 */

var shoppingModule = angular.module('shopApp', []);

// 自定义服务
shoppingModule.factory('Items', function () {
	var items = {};
	items.query = function () {
		// mock data
		var arr = [
			{title: 'Paint pots', quantity: 8, price: 3.95},
			{title: 'Polka dots', quantity: 17, price: 12.95},
			{title: 'Pebbles', quantity: 5, price: 6.95}
		];
		return arr;
	};
	return items;
});

// 控制器 : "ServerItemsController"
shoppingModule.controller('ServerItemsController', function (Items) {

	var self = this;
	self.items = Items.query();

});