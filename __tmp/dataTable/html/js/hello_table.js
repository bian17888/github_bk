var app = angular.module("myApp", ["ngTable"]);
(function () {
	"use strict";

	app.controller("helloController", helloController);
	helloController.$inject = ["NgTableParams"];

	function helloController(NgTableParams) {

		var self = this;
		var data = [
			{name: "Moroni", age: 50},
			{name: "Simon", age: 43},
			{name: "Jacob", age: 27},
			{name: "Nephi", age: 29},
			{name: "Christian", age: 34},
			{name: "Moroni", age: 50},
			{name: "Simon", age: 43},
			{name: "Jacob", age: 27},
			{name: "Nephi", age: 29},
			{name: "Christian", age: 34}
		];
		self.tableParams = new NgTableParams({}, {dataset: data});

	}

})();