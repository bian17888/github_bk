window.onload = function () {

	/**
	* 工厂模式
	* @param name
	* @param age
	* @param job
	* @returns {Object}
	*/
	function factory(name, age, job) {
		var o = new Object();
		o.name = name;
		o.age = age;
		o.job = job;
		o.sayName = function () {
			console.log(this.name);
		};
		return o;
	}

	var factory1 = factory('bian17888', 27, 'Front-End');
	factory1.sayName();

	console.log('========== 分割线 ==========');


	/**
	* 构造函数模式
	* @param name
	* @param age
	* @param job
	* @constructor
	*/
	function Person1(name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
		this.sayName = function () {
			console.log(this.name);
		}
	}

	var person11 = new Person1('bian17888', 27, 'Front-End');
	var person12 = new Person1('kai17888', 28, 'Front-End');

	console.log(person11 instanceof Person1);
	console.log(person12.constructor);
	console.log(person11.sayName == person12.sayName);
	console.log('========== 分割线 ==========');


	///**
	// * 构造函数模式 - 升级版
	// * 描述 : 提取公共方法,避免同一功能实例,创建两次
	// * @param name
	// * @param age
	// * @param job
	// * @constructor
	// */
	//function Person2(name, age, job) {
	//	this.name = name;
	//	this.age = age;
	//	this.job = job;
	//	this.sayName = sayName;
	//}
	//
	//function sayName() {
	//	console.log(this.name);
	//}
	//
	//var person21 = new Person2('bian17888', 27, 'Front-End');


	///**
	// * 原型模式
	// * 描述 : 基础例子
	// * @constructor
	// */
	//function Person3() {
	//	// do something
	//}
	//
	//Person3.prototype.name = "string";
	//Person3.prototype.age = 27;
	//Person3.prototype.job = 'Front-End';
	//
	//
	//Person3.prototype.sayName = function () {
	//	console.log(this.name);
	//}
	//
	//var person31 = new Person3();
	//
	//var person32 = new Person3();
	//person32.name = 'rewrite : bian17888 -> kai17888';
	///* 实例屏蔽了原型的同名属性, 通过 delete 可查看 */
	////delete person32.name;
	//person32.sayName();
	//
	///* 方法 : isPrototype, Object.getPrototypeOf() */
	//console.log(Person3.prototype.isPrototypeOf(person31));
	//console.log(Object.getPrototypeOf(person32));
	//console.log('----- -----');
	//
	///* 方法 : in 操作符, hasOwnProperty() */
	//console.log('name' in person32);
	//console.log(person32.hasOwnProperty('name'));
	//console.log(person32.hasOwnProperty('age'));
	//console.log('----- -----');
	//
	///* 方法 : 判断属于原型的属性 */
	//function hasPrototypeProperty(object, name) {
	//	return !object.hasOwnProperty(name) && (name in object);
	//}
	//
	//console.log(hasPrototypeProperty(person32, 'job'));
	//console.log('----- -----');
	//
	///* for-in : 枚举对象类型时, 会枚举原型属性 */
	//for (var key in person32) {
	//	//var status = (person32.hasOwnProperty(key));
	//	//if(status){
	//	console.log(person32[key]);
	//	//}
	//}
	//console.log('----- -----');
	//
	///* 方法 : Object.keys(), Object.getOwnPropertyNames() */
	//console.log(Object.keys(Person3.prototype));
	//console.log(Object.keys(person32));
	//console.log(Object.getOwnPropertyNames(Person3));
	//console.log('========== 分割线 ==========');


	///**
	// * 原型模式 - 简化原型语法
	// * 描述 : 会出现原型被重写的现象, {}
	// * @constructor
	// */
	//function Person4() {
	//
	//}
	//
	//Person4.prototype = {
	//	name   : "bian17888",
	//	age    : 27,
	//	sayName: function () {
	//		console.log(this.name);
	//
	//	}
	//};
	//
	//var person41 = new Person4();
	//console.log(person41.constructor);      // 不在是 function Person4 (){}
	//console.log('========== 分割线 ==========');


	///**
	// * 原型模式 - 原型的动态性
	// * 描述 : 即使在 new 创建对象以后, 对原型添加方法, 仍可使用
	// * @constructor
	// */
	//function Person5() {
	//
	//}
	//
	//Person5.prototype.name = 'bian17888';
	//
	//var person51 = new Person5();
	//
	//Person5.prototype.sayName = function () {
	//	console.log(this.name);
	//}
	//person51.sayName();
	//console.log('========== 分割线 ==========');


	///**
	// * 原型模式 - "应用类型"的属性问题
	// * 描述 : 共享导致,一处数值改动,另一处也会受到波及
	// * @constructor
	// */
	//function Person6() {
	//
	//}
	//
	//Person6.prototype.colors = ['red', 'blue', 'yellow'];
	//
	//var person61 = new Person6();
	//var person62 = new Person6();
	//person61.colors.push('colors');
	//
	//console.log(person61.colors);
	//console.log(person62.colors);
	//console.log(person61.colors === person62.colors);
	//console.log('========== 分割线 ==========');


	/**
	 * 组合模式
	 * 描述 :
	 *     构函 -> 用于定义实例属性;
	 *     原型 -> 用于定义方法和共享属性.
	 * @constructor
	 */
	function Person7(name, age) {
		this.name = name;
		this.age = age;
		this.friends = ['Summer', 'Bk'];
	}

	Person7.prototype.sayName = function () {
		console.log('name :' + this.name);
	};

	var person71 = new Person7('summer', 25);
	var person72 = new Person7('bk', 27);
	person71.friends.push('Blacky');

	console.log(person71.friends);
	console.log(person72.friends);
	console.log(person71.friends === person72.friends);
	console.log(person71.sayName === person72.sayName);
	console.log('========== 分割线 ==========');


	///**
	// * 组合模式 - 升级(动态原型模式)
	// * @constructor
	// */
	//function Person8(name, age) {
	//	this.name = name;
	//	this.age = age;
	//	this.friends = ['Summer', 'Bk'];
	//
	//	if (typeof this.sayName != 'function') {
	//		Person8.prototype.sayName = function () {
	//			console.log('name :' + this.name);
	//		};
	//	}
	//}
	//console.log('========== 分割线 ==========');


	/**
	 * 寄生构造函数模式 - 升级(动态原型模式)
	 * @constructor
	 */
	function Person8(name, age) {
		this.name = name;
		this.age = age;
		this.friends = ['Summer', 'Bk'];

		if (typeof this.sayName != 'function') {
			Person8.prototype.sayName = function () {
				console.log('name :' + this.name);
			};
		}
	}
	console.log('========== 分割线 ==========');


}