/**
 * @fileOverview routes
 * @desc
 * @author bian17888 16/11/28 13:59
 */

var _ = require('koa-route');

var routes = [
	{
		method    : 'get',
		path      : '/books',
		controller: require('./controllers').getBooks
	},
	{
		method    : 'post',
		path      : '/books',
		controller: require('./controllers').insertBook
	},
	{
		method    : 'get',
		path      : '/books/:bookId',
		controller: require('./controllers').getBook
	},
	{
		method    : 'put',
		path      : '/books/:bookId',
		controller: require('./controllers').updateBook
	},
	{
		method    : 'patch',
		path      : '/books/:bookId',
		controller: require('./controllers').updateBookAttribute
	}

];

module.exports.init = function (app) {
	routes.forEach(function (ele, idx) {
		app.use(_[ele.method]('/api' + ele.path, ele.controller))
	});
};