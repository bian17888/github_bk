/**
 * Created by bian17888 on 15/12/13.
 */

/**
 * co 源码分析
 * 说明 : 学习 co 源码 ( co 3.x.x )
 */
var fs = require('fs');

co(function *(){
	var package = yield read('package.json');
	var coFile = yield read('co.js')

	console.log(package);
	console.log(coFile);
})();

function co(fn) {
	return function(done){
		var ctx = this;
		var gen = fn.call(ctx);
		var it = null;
		_next();

		function _next(err, res) {
			if (err) res = err;
			it = gen.next(res);
			// {value : function(){}, do ne: false}
			if(!it.done){
				it.value(_next)
			}
		}
	}
}


/**
 * 偏函数, Thunk
 * @param file
 * @returns {Function}
 */
function read (file){
	return function(fn){
		fs.readFile(file, 'utf-8', fn)
	}
}