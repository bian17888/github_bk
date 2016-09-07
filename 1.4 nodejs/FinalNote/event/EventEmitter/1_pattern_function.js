/**
 * @fileOverview pattern1_function
 * @desc 模式1 : instance an EventEmitter and return it from a function call
 * @author bian17888 16/8/18 15:33
 */

var EventEmitter = require('events').EventEmitter;

var r = getResource(5);

r.on('start', function () {
	console.log('I have started!');
});
r.on('data', function (d) {
	console.log('    I receive data : ' + d);
});
r.on('end', function (t) {
	console.log('I am done, with ' + t + ' data events.');
});

//////////////////////////////////////////////////

function getResource(c) {
	var e = new EventEmitter();
	process.nextTick(function () {
		var count = 0;
		e.emit('start');
		var t = setInterval(function () {
			e.emit('data', ++count);
			if (count === c) {
				e.emit('end',count);
				clearInterval(t);
			}
		},10);
	});
	return e;
}