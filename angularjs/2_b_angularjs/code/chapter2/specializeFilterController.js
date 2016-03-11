/**
 * @fileOverview
 * @author bian17888 16/2/17 16:59
 */

var shoppingModule = angular.module('shopApp', []);

// 自定义过滤器
shoppingModule.filter('titleCase', function(){
	var titleCaseFilter = function(input, tagbk){
		var words = input.split(' ');    // 分组
		for (var i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' <' + tagbk + '>';
		}
		return words.join(' ');
	};
	return titleCaseFilter;
});

// 控制器 : "FilterController"
shoppingModule.controller('FilterController', function () {

	var self = this;
	var items = [{name: 'bian17888', price: '12.00'}, {name: 'bian17888', price: '20.00'}]

	self.items = items;

});