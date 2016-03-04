/**
 * @fileOverview
 * @author bian17888 16/2/17 16:59
 */

angular.module('ngsrcApp', [])
	.controller('NgsrcController', function () {

		var self = this;

		self.src = 'map.png';

		self.itemList = [
			{href : '#', text : 'link01'},
			{href : '#', text : 'link02'}
		]

	});