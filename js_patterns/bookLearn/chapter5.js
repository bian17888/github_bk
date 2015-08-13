/**
 * Created by biankai on 15/4/25.
 */

/**
 * 第5章 对象创建模式
 *
 * @module JSPatters
 */




/**
 * 命名空间模式 + 声明依赖
 *
 * @namespace CHAPTER5
 * @class namespace + dependency_declaration
 */
/**
 * 命名空间检测方法
 *
 * @method namespaceBase
 */

var MYAPP = MYAPP || {};
MYAPP.namespace = function (ns_string) {

	var i,
		parent = MYAPP,
		parts = ns_string.split('.');


	if (parts[0] === 'MYAPP') {
		parts = parts.slice(1);
	}

	for (i = 0; i < parts.length; i++) {
		if (typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		/*  ***** 当时没有明白指向过程 : <递归>, 图解见"javascript 模式.xmind -> 第五章 -> namespace.png"  *****
		 *  parent 每次指向都有变化,分别为 modules, module2
		 *  MYAPP 不变
		 */
		parent = parent[parts[i]];
	}

	return parent;

}
function namespaceBase() {

	// 将返回值赋给一个局部变量
	var module1 = MYAPP.namespace('MYAPP.modules.module1');
	// 忽略最前面的 MYAPP
	MYAPP.namespace('modules.module2');
	console.dir(MYAPP);

}
//namespaceBase();


/**
 * 声明依赖
 *
 * @method dependency
 */
function dependency() {
	var myfun = function () {
		// 依赖
		var event = MYAPP.util.Event,
			dom = MYAPP.util.Dom;

		// 使用事件和 DOM 变量
		// 下面的函数......
	}
}
//dependency();


/**
 * 私有成员
 *
 * @namespace CHAPTER5
 * @class private
 */
/**
 * 通过构造函数创建
 *
 * @method privateFn
 */
function privateFn() {

	function Gadget() {

		// 私有成员
		var name = 'dog tool';
		// 共有函数

		this.getName = function () {
			return name;
		}

	}

	var toy = new Gadget();
	console.log(toy.name);                      // 输出 undefined
	console.log(toy.getName());                 // 输出 'dog tool'

}
//privateFn();


/**
 * ***** 通过对象字面量创建 : 此例子还为"模块模式"基础版
 *
 * @method privateObj
 */
function privateObj() {

	var myobj = (function () {

		// 私有变量
		var name = 'bian17888';

		// 实现公有部分
		return {
			getName: function () {
				return name;
			}
		}

	}());
	console.log(myobj.getName());

}
//privateObj();


/**
 * 原型和私有性
 *
 * @method privateObjPro
 */
function privateObjPro() {

	function Gadget() {
		// 私有成员
		var name = "bian17888";
		// 公有函数
		this.getName = function () {
			return name;
		}
	}

	Gadget.prototype = (function () {
		// 私有成员
		var browser = "Mobile Webkit";
		// 公有原型成员
		return {
			getBrowser: function () {
				return browser;
			}
		}
	}())

	var toy = new Gadget();
	console.log(toy.getName());
	console.log(toy.getBrowser());

}
//privateObjPro();


/**
 * 私有方法 -> 公有方法
 *
 * @method private_To_public
 */
function private_To_public() {

	var myarray;

	(function () {
		var astr = '[object Array]',
			toString = Object.prototype.toString;

		function isArray(a) {
			return toString.call(a) === astr;
		}

		function indexOf(haystack, needle) {
			var i = 0,
				max = haystack.length;
			for (; i < max; i++) {
				if (haystack[i] === needle) {
					return i;
				}
			}
			return -1;
		}

		var arr = [1, 2, 3];

		// 关键语句
		myarray = {
			isArray: isArray,
			indexOf: indexOf,
			inArray: indexOf,
			arrOld : arr,
			arrNew : arr
		}

	}())

	// 函数正常运行
	console.log(myarray.isArray([1, 2]));
	console.log(myarray.isArray({}));
	console.log(myarray.indexOf(['x', 'y', 'z'], 'z'));
	console.log(myarray.inArray(['x', 'y', 'z'], 'z'));
	console.log('==========');


	// 改变公有 indexOf()方法 , 私有 inArray() 正常运行
	myarray.indexOf = null;
	console.log(myarray.inArray(['x', 'y', 'z'], 'x'));

	myarray.arrOld.pop();
	console.log(myarray.arrNew);

}
//private_To_public();


/**
 * ***** 模块模式 : 强烈建议使用这种模式组织代码,尤其是代码日益增长的时候
 *
 * @method modulePatterns
 */
function modulePatterns() {

	MYAPP.namespace('modules.utilities.array');

	MYAPP.utilities.array = (function () {

		// 声明依赖
		var uobj = MYAPP.utilities.object,
			ulang = MYAPP.utilities.lang,

			// 私有属性
			array_string = '[object Array]',
			ops = Object.prototype.toString;

			// 私有方法
			// ...

			// var 变量结束

		// 可选一次性初始化过程
		// ...

		// 公有 API
		return {
			inArray : function (haystack, needle) {
				var i = 0,
					max = haystack.length;
				for (; i < max; i++) {
					if (haystack[i] === needle) {
						return i;
					}
				}
				return -1;
			},
			isArray : function(o){
				return ops.call(o) === array_string;
			}
			// ... 更多属性和方法
		}

	}());

}
//modulePatterns();


/**
 * 揭示模块模式  + 导入全局变量
 *
 * @method modulePatternsPro
 */
function modulePatternsPro() {

	MYAPP.namespace('modules.utilities.array');

	// *** 导入全局变量参数 : app, global
	MYAPP.utilities.array = (function (app, global) {

		// 声明依赖
		var uobj = app.utilities.object,
			ulang = app.utilities.lang,

		// 私有属性
			array_string = '[object Array]',
			ops = Object.prototype.toString,

		// 私有方法
			inArray =  function (haystack, needle) {
				var i = 0,
					max = haystack.length;
				for (; i < max; i++) {
					if (haystack[i] === needle) {
						return i;
					}
				}
				return -1;
			},
			isArray = function(o){
				return ops.call(o) === array_string;
			};

		// var 变量结束

		// 可选一次性初始化过程
		// ...

		// *** 揭示公有 API
		return {
			inArray : inArray,
			isArray : isArray
		}

	// *** 导入全局变量
	}(MYAPP, this));

}
//modulePatternsPro();