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

fs.mkdir('temp', function (err) {
	fs.exists('temp', function (exists) {
		if (exists) {
			process.chdir('temp');
			fs.writeFile('test.txt', 'this a text ....', function (err) {
				fs.rename('test.txt', 'new.txt', function (err) {
					fs.stat('new.txt', function (err, stats) {
						console.log('File has Size : ' + stats.size + 'bytes');
						fs.readFile('new.txt', function (err, data) {
							console.log('File contents : '+ data.toString());
						})
					})
				})
			})
		}
	})
})