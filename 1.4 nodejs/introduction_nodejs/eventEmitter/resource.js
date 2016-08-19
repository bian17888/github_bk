/**
 * @fileOverview 2_util_getresource
 * @desc 模式2 : we have an object that extends the EventEmitter Class.
 * @author bian17888 16/8/18 16:24
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');

util.inherits(Resource, EventEmitter);

module.exports = Resource;

//////////////////////////////////////////////////

function Resource(c) {

	var self = this;
	var maxCount = c;

	process.nextTick(function () {
		var count = 0;
		self.emit('start');
		var t = setInterval(function () {
			self.emit('data', ++count);
			if (count === maxCount) {
				self.emit('end', count);
				clearInterval(t);
			}
		}, 10)
	})

}