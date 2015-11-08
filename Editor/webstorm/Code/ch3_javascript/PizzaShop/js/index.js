// index.js
(function () {

	"use strict";

	/**
	 * first jsDoc
	 * @param {Boolean} validate
	 * @param {string} size
	 * @param {string} crust
	 * @param {Array} toppings
	 */
	function submitOrder(validate, size, crust, toppings) {
		alert(123);
	}

	$(document).ready(function(){

		$('#orderForm').on('submit', function () {
			submitOrder(true, 'large', 'thin', ['pepperoni', 'sausage']);
			return false;
		})

	});

	var dog = new Animal();
	dog.feed('book');



})();