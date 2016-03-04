/**
 * @fileOverview
 * @author bian17888 16/2/17 16:59
 */

angular.module('showApp', [])
	.controller('ShowController', function () {

		var self = this;

		self.menuStatus = {
			show : true
		};

		self.toogleMenu = function(){
			self.menuStatus.show = !self.menuStatus.show;
		}

	});