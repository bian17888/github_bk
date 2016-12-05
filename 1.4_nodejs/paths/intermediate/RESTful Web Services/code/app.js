/**
 * @fileOverview app
 * @desc
 * @author bian17888 16/11/28 13:54
 */

var koa = require('koa'),
	mongoose = require('mongoose');

var app = koa(),
	db = mongoose.connect('mongodb://localhost/local/bookAPI');

var routes = require('./routes');



routes.init(app);

app.listen(3000);
