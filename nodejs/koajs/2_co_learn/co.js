/**
 * Created by bian17888 on 15/12/13.
 */

/**
 * co 的使用
 * 说明 : 异步函数, 需要包装成偏函数( thunk ) 形式
 */
var co = require('co');
var fs = require('fs');

co(function *(){
	var file = yield read('package.json');
	console.log(file);
});

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