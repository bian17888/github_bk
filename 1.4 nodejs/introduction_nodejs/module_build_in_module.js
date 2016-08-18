/**
 * @fileOverview module_build_in_module
 * @desc 模块 - 系统内置模块
 * @author bian17888 16/8/18 09:54
 */

var os = require('os');

console.log('Host : ' + os.hostname());
console.log('15 min. load average : ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' MB free. ' );

//////////////////////////////////////////////////

function toMb (byte) {
	return Math.round(byte/1024/1024);
}
