/**
 * 参见文章 : [Angular浅入深出系列 - 基础知识] http://www.atatech.org/articles/46531
 */

var collectionModule = angular.module('collectionApp', []);

/**
 * 控制器 : collection
 * @desc 用于演示 作用域隔离 与 全局作用域
 */
collectionModule.controller('collection', function () {

	var self = this;

	self.items = [
		{name: 'name1', author: ['作者1', '作者2']},
		{name: 'name2', author: ['作者1', '作者2', '作者3']},
		{name: 'name3', author: ['作者1', '作者2']}
	];

	self.infos = [
		{id: 1, name: 'Item 1'},
		{id: 2, name: 'Item 2'},
		{id: 3, name: 'Item 3'},
		{id: 4, name: 'Item 4'}
	];

	self.books = [
		{name: 'book 1', price: 15},
		{name: 'book 2', price: 15},
		{name: 'book 3', price: 15},
		{name: 'book 4', price: 15}
	]

	self.destory = function (item) {
		var index = self.infos.indexOf(item);
		self.infos.splice(index, 1);
	};

});