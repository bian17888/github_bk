window.onload = function () {

	/**
	 * 继承 : 原型链
	 * 描述 :
	 *      父类 -> SuperType
	 *          property
	 *          getSuperValue()
	 *      子类 -> SubType
	 *          subProperty
	 *          getSubValue()
	 *
	 * @constructor
	 */
	function SuperType() {
		this.property = true;
	};
	SuperType.prototype.getSuperValue = function () {
		return this.property;
	}
	function SubType () {
		this.subProperty = false;
	}
	SubType.prototype.getSubValue = function () {
		return this.subProperty;
	}
	SubType.prototype = new SuperType();
	SubType.prototype.getSubValue = function () {
		return this.subProperty;
	}

	var instance = new SubType();
	console.log(instance.getSuperValue());
	console.log('========== 分割线 ==========');



	/**
	 * 继承 : 原型链 - 引用类型属性的问题
	 * @constructor
	 */
	function SuperType2() {
		this.colors = ['red', 'yellow'];
	};
	function SubType2 () {

	}
	SubType2.prototype = new SuperType2();

	var instance21 = new SubType2();
	instance21.colors.push('pushColor');

	var instance22 = new SubType2();
	console.log(instance21.colors);
	console.log('========== 分割线 ==========');


	/**
	 * 继承 : 构造函数
	 * @constructor
	 */
	function SuperType3() {
		this.colors = ['red', 'yellow'];
	};
	function SubType3 () {
		// 继承 SuperType3
		SuperType3.call(this)
	}

	var instance31 = new SubType3();
	instance31.colors.push('pushColor');
	var instance32 = new SubType3();

	console.log(instance31.colors);
	console.log(instance32.colors);
	console.log('========== 分割线 ==========');


	/**
	 * 继承 : 构造函数 - 传递参数
	 * @constructor
	 */
	function SuperType4(name) {
		this.name = name;
	};
	function SubType4 () {
		// 继承 SuperType4
		SuperType4.call(this, 'bian17888');
		this.age = 27;
	}

	var instance41 = new SubType4();

	// 注意: 父类原型定义的方法, 子类也无法服用
	SuperType4.prototype.sayName = function () {
		alert(this.name);
	}
	console.log(instance41.name);
	//console.log(instance41.sayName());
	console.log('========== 分割线 ==========');



	/**
	 * 继承 : 组合
	 * @constructor
	 */
	function SuperType5(name) {
		this.name = name;
		this.colors = ['red', 'blue'];
	};
	SuperType5.prototype.sayName = function () {
		console.log(this.name);
	}
	function SubType5(name, age) {
		// 继承属性
		SuperType5.call(this, name);
		this.age = age;
	}

	// 继承方法
	SubType5.prototype = new SuperType5();

	var instance51 = new SubType5('bian17888', 27);
	instance51.colors.push('color1');
	instance51.sayName()
	console.log(instance51.age + '1111111');
	console.log(instance51.colors);
	console.log('========== 分割线 ==========');

	/**
	 * 继承 : 寄生组合
	 * @constructor
	 */
	function SuperType6(name) {
		this.name = name;
		this.colors = ['red', 'blue'];
	};
	SuperType6.prototype.sayName = function () {
		console.log(this.name);
	}
	function SubType6(name, age) {
		// 继承属性
		SuperType6.call(this, name);
		this.age = age;
	}

	inheritPrototype (SubType6, SuperType6);

	function inheritPrototype (subType, superType) {
		var prototype = object(superType.prototype);
		prototype.constructor = subType;
		subType.prototype = prototype;
	}

	function object (o) {
		function F () {};
		F.prototype = o;
		return new F();
	}

	var instance61 = new SubType6('bian17888', 27);
	instance61.sayName();
	console.log(instance61.age);


}