/**
 * @fileOverview honorstudent
 * @desc
 * @author bian17888 16/9/1 10:33
 */

var fun = require('./mathfun');

process.on('message', function (m) {
	if (m.cmd === 'double') {
		fun.evenDoubler(m.number, function (err, result) {
			process.send({answer : result});
		});
	} else if (m.cmd === 'done') {
		process.exit();
	}
});
