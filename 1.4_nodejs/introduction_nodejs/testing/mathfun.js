/**
 * @fileOverview mathfun.js
 * @desc
 * @author bian17888 16/8/30 10:42
 */

var maxTime = 1000;

module.exports = {
	evenDoubler    : evenDoubler,
	evenDoublerSync: evenDoublerSync
};

//////////////////////////////////////////////////

/**
 * @desc
 * If input is even, double it
 * If input is odd, error
 * (call takes random amount of time < 1s)
 * @param v
 * @returns {number}
 */
function evenDoublerSync(v) {
	if (v % 2) {
		throw (new Error('Odd input'))
	} else {
		return v * 2;
	}
}

function evenDoubler(v, callback) {
	var waitTime = Math.floor(Math.random() * maxTime);
	if (v % 2) {
		setTimeout(function () {
			callback(new Error('Odd input'))
		}, waitTime);
	} else {
		setTimeout(function () {
			callback(null, v * 2, waitTime);
		}, waitTime);
	}
}