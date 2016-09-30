/**
 * @fileOverview readableStream
 * @desc
 * @author bian17888 16/8/19 10:20
 */

var request = require('request');

var s = request('http://www.pluralsight.com/');

s.on('data', function (chunk) {
	console.log(chunk.toString('utf8'));
	console.log('got %d bytes of data', chunk.length);
});

s.on('end', function () {
	console.log('==========');
	console.log('finish ....');
})
