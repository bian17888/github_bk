/**
 * @fileOverview 3-child-fork
 * @desc
 * @author bian17888 16/9/1 10:34
 */

var fork = require('child_process').fork;

var child = fork(__dirname + '/honorstudent.js');

child.send({cmd: 'double', number: 100});

child.on('message', function (m) {
	console.log('The answer is : ' + m.answer);
	child.send({cmd: 'done'})
});
