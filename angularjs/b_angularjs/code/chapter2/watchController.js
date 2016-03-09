/**
 * @fileOverview
 * @author bian17888 16/2/17 16:59
 */

angular.module('carApp', [])
	.controller('WatchController', function ($scope) {

		var self = this;

		self.bill = {};

		$scope.items = self.items = [
			{title: 'Paint pots', quantity: 8, price: 3.95},
			{title: 'Polka dots', quantity: 17, price: 12.95},
			{title: 'Pebbles', quantity: 5, price: 6.95}
		];

		self.remove = function(index){
			self.items.splice(index, 1);
		}

		function calculatePrice (newValue, oldValue, scope) {

			var i,
				total = 0,
				items = self.items;

			for (i in items) {
				total = total + items[i].price * items[i].quantity;
			};

			self.bill.total = total;
			self.bill.discount = total > 100 ? 10 : 0;
			self.bill.subtotal = total - self.bill.discount;

		};

		// tolight : 此处'items'必须为字符串 && 要绑定在$scope 上
		$scope.$watch('items', calculatePrice, true);

	});