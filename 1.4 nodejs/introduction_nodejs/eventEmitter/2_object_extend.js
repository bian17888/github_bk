/**
 * @fileOverview 2_object_extend
 * @desc 模式2 : we have an object that extends the EventEmitter Class.
 * @author bian17888 16/8/18 16:24
 */

var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function () {
	console.log('I have started!');
});
r.on('data', function (d) {
	console.log('    I receive data : ' + d);
});
r.on('end', function (t) {
	console.log('I am done, with ' + t + ' data events.');
});
