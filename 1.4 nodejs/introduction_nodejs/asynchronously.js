/**
 * @fileOverview asynchronously demo
 * @desc
 *  1. 形参为回调函数的定义写法 - evenDoubler
 *  2. 回调函数格式 - handleResults(error, result)  ***第一个参数为 error, 第二个为 results ***
 *  3. 回调函数执行后, 返回顺序的不确定性 - 见运行后的结果
 * @author bian17888 16/8/17 10:21
 */

var maxTime = 1000;

for (var i = 0; i<10; i++) {
	evenDoubler(i,handleResults)
}

console.log('start');

//////////////////////////////////////////////////

function evenDoubler(v, callback) {
	var waitTime = Math.floor(Math.random()*(maxTime+1));

	if (v % 2) {
		setTimeout(function(){
			callback(new Error('odd input'));
		},waitTime);
	} else {
		setTimeout(function(){
			callback(null, v*2, waitTime);
		},waitTime);
	}
}

function handleResults(error, results, time) {
	if (error) {
		console.log('ERROR : ' + error);
	} else {
		console.log('The results are : ' + results + ' (' + time + 'ms)');
	}
}