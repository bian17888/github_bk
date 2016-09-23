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

console.log(process.env);
console.log(process.pid);
console.log(process.uptime());
console.log(process.cwd());

