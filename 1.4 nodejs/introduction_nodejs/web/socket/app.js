/**
 * @fileOverview app
 * @desc
 * @author bian17888 16/8/30 11:41
 */

var app = require('koa')();
var _ = require('koa-route');
var views = require('co-views');
var http = require('http').Server(app.callback());
var io = require('socket.io')(http);

var render = views('templates', {
	map: { html: 'swig' }
});

app.use(_.get('/', index));

io.on('connection', function (socket) {
	socket.on('chat message', function (msg) {
		io.emit('chat message', msg);
	});
});

http.listen(3000, function () {
	console.log('listening on 3000');
});

//////////////////////////////////////////////////
function *index () {
	this.body = yield render('index', {});
}

