/**
 * @fileOverview 1-child-exec
 * @desc
 * @author bian17888 16/9/1 10:14
 */

var exec = require('child_process').exec;

var child = exec('uptime', function (err, stdout, stderr) {
	if (err) {
		console.log('Error : ' + stderr);
	} else {
		console.log('Output is : ' + stdout);
	}
});

console.log('PID is : ' + child.pid);

