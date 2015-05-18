/**
 * Created by biankai on 15/4/25.
 */

/**
 * 第4章 函数
 *
 * @module JSPatters
 */




/**
 * 函数基本知识
 *
 * @namespace CHAPTER4
 * @class base
 */
/**
 * name 属性, 在浏览器中可查看到
 *
 * @method fnName
 */
function fnName() {
	function a1() {
	}

	var a2 = function a22() {
	};
	var a3 = function () {
	};

	console.log(a1.name);
	console.log(a2.name);
	console.log(a3.name);
}
//fnName();


/**
 * 回调模式
 *
 * @namespace CHAPTER4
 * @class callback
 */
/**
 * 回调函数 -> 基础实例
 *
 * @method baseCallBack
 */
function baseCallBack() {
	function findNodes(callback) {
		var status,
			i = 0,
			len = 10;

		// 判断传入参数是否为 function
		if (typeof callback === 'function') {
			status = true;
		}

		for (i; i < len; i++) {
			// 执行回调函数
			if (status) {
				callback(i);
			}
		}
	}

	function printNodes(i) {
		console.log("This node's index is :  " + i);
	}

	findNodes(printNodes);
}
//baseCallBack();


/**
 * 回调函数 -> 回调函数为"对象的方法" P67
 *
 * @method proCallBack
 */
function proCallBack() {

	/* 定义稍后传入的方法, paint
	 * 注意 : 此时的 this 指针引发问题 -> 指向 window, 而不是 myapp
	 */
	var myapp = {
		color: "green",
		print: function () {
			console.log(this.color);
		}
	};

	function findNodes(callback, callback_Obj) {
		var i = 0,
			len = 5;

		for (i; i < len; i++) {
			/* ***** 此处是关键 ***** */
			// 判断传入参数类型 : 如果为 string, 进行加工
			if (typeof callback === 'string') {
				callback = callback_Obj[callback];
			}
			// 判断传入参数类型 : 如果为 function, 改变 this 指针
			if (typeof callback === 'function') {
				// 执行回调
				callback.call(callback_Obj, i);
			}
		}
	}

	//findNodes(myapp.print, myapp);
	findNodes('print', myapp);
}
//proCallBack();


/**
 * 返回函数
 *
 * @namespace CHAPTER4
 * @class refn
 */
/**
 * 闭包
 *
 * @method refn
 */
function refn() {

	var setUp = function () {
		var count = 0;
		return function () {
			count = count + 1;
			console.log(count);
		}
	};

	var next = setUp();
	next();

}
//refn();


/**
 * 即时函数模式
 *
 * @namespace CHAPTER4
 * @class runfn
 */
/**
 * 可传参
 *
 * @method runfn
 */
function runfn() {

	(function (who, when) {
		console.log('即使函数, 创建者: ' + who + ' 时间是 : ' + when);
	}('bian17888', 'today'))

}
//runfn();


/**
 * 即时对象初始化
 *
 * @namespace CHAPTER4
 * @class runObj
 */
/**
 * 无描述
 *
 * @method runObj
 */
function runObj() {
	({
		// 定义设定值
		// 又名配置常数
		maxWidth : 600,
		maxHeight: 400,

		// 定义一些实用方法
		gimmeMax : function () {
			return this.maxWidth + this.maxHeight;
		},

		// 初始化
		init     : function () {
			console.log(this.gimmeMax());
			// 更多初始化任务
		}
	}.init())
}
//runObj();


/**
 * 初始化时分支(Init-time branching) 或加载时分支(load-time branching) P78
 *
 * @namespace CHAPTER4
 * @class initBranch
 */
/**
 * 无描述
 *
 * @method initBranch
 */
function initBranch() {

	// 接口
	var utils = {
		addListener   : null,
		removeListener: null
	}

	// 实现
	if (typeof window.addEventListener === 'function') {
		utils.addListener = function (el, type, fn) {
			el.addListener(type, fn, false);
		}
		utils.removeListener = function (el, type, fn) {
			el.removeListener(type, fn, false);
		}
	}
	// 其他判断条件, 参见P78
}
//initBranch();


/**
 * 函数属性
 *
 * @namespace CHAPTER4
 * @class remind
 */
/**
 * 备忘模式
 *
 * @method remind
 */
function remind() {
	var myFun = function (param) {
		if (!myFun.cache[param]) {
			var result = {};

			// ... 开销很大的操作
			myFun.cache[param] = result;
		}
		return myFun.cache[param];
	}

	// 缓存存储
	myFun.cache = {};

	// 调用函数
	myFun('bian17888');
	myFun('kai17888');
	console.log(myFun.cache);

}
//remind();


/**
 * 配置对象模式
 *
 * @namespace CHAPTER4
 * @class configuration
 */
/**
 * 无描述
 *
 * @method configuration
 * @param {Object} params 参数对象,用于设置每个 dom 的 css 属性
 */
function configuration() {

	function createDiv(params) {
		var $div = $('<div> Div Block </div>').css(params);
		$('body').append($div);

	}

	createDiv({'background-color': '#eee', 'width': '200px', 'height': '200px'});
	createDiv({'background-color': '#ddd', 'width': '200px', 'height': '200px', 'margin': '20px 0'});

}
configuration();