/**
 * @fileOverview synchronous
 * @desc
 * @author bian17888 16/8/22 10:42
 */

var fs = require('fs');

if (fs.existsSync('temp')) {
	console.log('Directory exists , removing ...');
	if (fs.existsSync('temp/new.txt')) {
		fs.unlinkSync('temp/new.txt')
	} 
	fs.rmdirSync('temp');
} 

fs.mkdirSync('temp');
if (fs.existsSync('temp')) {
	process.chdir('temp');
	fs.writeFileSync('test.txt', 'test txt');
	fs.renameSync('test.txt', 'new.txt');
	console.log('File has Size : ' + fs.statSync('new.txt').size + 'bytes');
	console.log('File contents : '+ fs.readFileSync('new.txt').toString());
}