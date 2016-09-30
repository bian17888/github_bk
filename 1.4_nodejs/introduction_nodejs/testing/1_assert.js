/**
 * @fileOverview 1_assert
 * @desc
 * @author bian17888 16/8/30 10:42
 */

var assert = require('assert');

var fun = require('./mathfun');

// 同步方式
assert.equal(fun.evenDoublerSync(2), 4);
assert.throws(function () {
	fun.evenDoublerSync(3);
}, /Odd/);

// 异步方式
fun.evenDoubler(2, function (err, results) {
	assert.ifError(err);
	assert.equal(results, 4, 'evenDoubler failed on even number');
});

fun.evenDoubler(4, function (err, results) {
	assert.notEqual(err, null);
});

