// util.js


// demo1:inherits()


// demo2:inspect()
var util = require('util');
function Person () {
	this.name = 'byvoid';

	this.toString = function  () {
		return this.name;
	}
}
var obj = new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
console.log(util.inspect(obj,false,2,true)); //color彩色编码
