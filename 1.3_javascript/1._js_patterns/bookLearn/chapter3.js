/**
 * Created by biankai on 15/4/25.
 */

/**
 * 第3章 字面量和构造函数
 *
 * @module JSPatters
 */




/**
 * 对象字面量
 *
 * @namespace CHAPTER3
 * @class obj
 */
/**
 * 删除对象属性
 *
 * @method deleteObj
 */
function deleteObj() {
	var dog = {};
	dog.name = "blacky";
	//delete dog.name;
	console.log(dog.name);
}
//deleteObj();


/**
 * 自定义构造函数
 *
 * @namespace CHAPTER3
 * @class constructor
 */
/**
 * 构造函数中的 this
 *
 * @method funThis
 */
function funThis() {
	var Person = function (name) {

		// 使用对象字面量模式创建一个对象
		// var this = Object.create(Person.prototype)

		//向 this 添加属性,方法
		this.name = name;
		this.say = function () {
			console.log('Hello, my name is ' + this.name);
		}

		// return this
	}

	var person = new Person('bian17888');
	person.say();
}
//funThis();


/**
 * 构造函数的返回值
 *
 * @method funThis
 */
function funThisBack() {
	var Person = function () {

		this.name = 'this name';

		// 创建并返回一个新对象
		var that = {};
		that.name = 'that name';

		// 返回这个新对象代替 this
		return that;
	}

	var person = new Person();
	console.log(person.name);       // 输出 that name

}
//funThisBack();


/**
 * 数组字面量
 *
 * @namespace CHAPTER3
 * @class arr
 */
/**
 * 一个技巧, 创建10个"->"
 *
 * @method skillCreateArr
 */
function skillCreateArr() {
	var sympol = new Array(11).join('->');
	console.log(sympol);
}
//skillCreateArr();


/**
 * 一个方法, 检验是否为数组
 *
 * @method isArray
 * @param {String} 字符串
 */
function addArrayMethod() {
	if (typeof Array.isArray === 'undefined') {
		Array.isArray = function (arg) {
			return Object.prototype.toString.call(arg) === '[object Array]';
		}
	}
}
//addArrayMethod();
//console.log(Array.isArray([1,2]));


/**
 * JSON
 *
 * @namespace CHAPTER3
 * @class json
 */
/**
 * 一个技巧, 创建10个"->"
 *
 * @method skillCreateArr
 */
function skillCreateArr() {
	var sympol = new Array(11).join('->');
	console.log(sympol);
}
//skillCreateArr();


/**
 * 错误对象
 *
 * @namespace CHAPTER3
 * @class  error
 */
/**
 * 字面量创建正则与new 创建区别
 *
 * @method jsError
 */
function jsError() {

	var a = 1,
		arrError = [];

	try {
		console.log(c);
	}
	catch (e) {
		console.log(e);
	}

}
// 基础实例
jsError.base = function () {
	var a = 1,
		arrError = [];

	try {
		console.log(c);
		// 抛出异常
		throw new Error(c);
		/*
		 * throw new Error(c) 相当于 下面的字面量方法
		 throw {
		 name : 'Error',
		 message : c
		 }
		 */
	}
	catch (e) {
		console.log(e);
	}
	finally {
		var c = 'cc';
		console.log(c);
	}
}
// 字面量方式
jsError.pro = function () {
	var a = 1,
		arrError = [];

	try {
		// 自定义错误
		throw {
			name   : 'MyError',
			message: 'oops',
			extra  : 'This was rather embarrassing',
			remedy : genericErrorHandler    // 制定应该处理错误的函数
		}

		function genericErrorHandler() {
			console.log('deal with Error!');
		}
	}
	catch (e) {
		// 通知用户
		console.log(e.message);
		// 优雅的处理错误
		e.remedy();  // 调用函数genericErrorHandler()
	}

}
//jsError();
//jsError.base();
//jsError.pro();


