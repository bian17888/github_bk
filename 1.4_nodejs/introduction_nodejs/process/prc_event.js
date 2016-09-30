/**
 * @fileOverview base
 * @desc
 * @author bian17888 16/8/22 10:02
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
	process.stdout.write('data -> ' + chunk);
});

process.stdin.on('end', function () {
	process.stdout.write('End \n');
});

// event : 'SIGINT'
process.on('SIGINT', function () {
	console.log('Got SIGINT.  Press Control-D to exit.');
});

// event : 'SIGTERM' -> kill -term pid
//process.on('SIGTERM', function() {
//	process.stderr.write("Why are you trying to terminate me?!?  :-)");
//});

console.log('Node is processing as # : ' + process.pid);


console.log(process.env);
console.log(process.pid);
console.log(process.uptime());
console.log(process.cwd());

