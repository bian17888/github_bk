// util.js
var util = require('util');

// demo1:inherits()
// inherits只继承Base在原型中定义的函数，其他的不继承
function Base (){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('hello：'+this.name);
	};
}
Base.prototype.showName = function(){
	console.log(this.name);
}

function Sub(){
	this.name = 'sub';
}

util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
console.log('==========');

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();  //抛出异常
console.log(objSub);


// demo2:inspect()
// function Person () {
// 	this.name = 'byvoid';

// 	this.toString = function  () {
// 		return this.name;
// 	}
// }
// var obj = new Person();

// console.log(util.inspect(obj));
// console.log(util.inspect(obj,true));
// console.log(util.inspect(obj,false,2,true)); //color彩色编码
