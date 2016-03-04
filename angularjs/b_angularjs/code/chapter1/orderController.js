angular.module('appOrder', [])
	.controller('orderController', function () {

		var self = this;

		self.items = [
			{title: 'Paint pots', quantity: 8, price: 3.95},
			{title: 'Polka dots', quantity: 17, price: 12.95},
			{title: 'Pebbles', quantity: 5, price: 6.95}
		];

		self.remove = function(index){
			self.items.splice(index, 1);
		}

	});