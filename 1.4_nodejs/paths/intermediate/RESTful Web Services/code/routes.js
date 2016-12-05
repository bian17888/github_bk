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
		controller: require('./controllers').index
	},
	{
		method    : 'get',
		path      : '/books/:bookId',
		controller: require('./controllers').book
	},
	{
		method    : 'post',
		path      : '/books',
		controller: require('./controllers').insertBook
	}
];

module.exports.init = function (app) {
	routes.forEach(function (ele, idx) {
		app.use(_[ele.method]('/api' + ele.path, ele.controller))
	});
};