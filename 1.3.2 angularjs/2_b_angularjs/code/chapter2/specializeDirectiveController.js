/**
 * @fileOverview
 * @author bian17888 16/2/17 16:59
 */

var shoppingModule = angular.module('shopApp', []);

// 自定义指令
shoppingModule.directive('ngbkFocus', function(){
	return {
		link : function (scope, element, atrs, controller) {
			element[0].focus();
		}
	}
});

// 控制器 : "FilterController"
shoppingModule.controller('DirectiveController', function () {

	var self = this;
	self.message = {text: 'default message test ! '};

	self.clickFocused = function () {
		self.message.text = 'click focus !';
	};

	self.clickUnfocused = function () {
		self.message.text = 'click unfocus !';
	};

});