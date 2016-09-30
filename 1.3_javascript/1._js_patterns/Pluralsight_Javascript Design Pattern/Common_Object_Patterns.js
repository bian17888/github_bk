/**
 * Created by biankai on 15/4/23.
 */

/**
 * 形参,实参数组个数 : myFunc
 * 描述 : 不传实参,默认为 undefined
 * @param a
 * @param b
 * @param c
 * @returns {*}
 */
function myFunc(a, b, c) {
	return a + b + c;
}
console.log(myFunc(1,2,3));
console.log(myFunc(1,2));
console.log(myFunc(1,2,3,4));


/**
 * Magic Arguments : myFuncPro
 * @returns {*}
 */
function myFuncPro () {
	var start = 0;
	for (var i = 0; i<arguments.length; i++){
		start = start + arguments[i];
	}
	return start;
}
console.log('1+2+3+4 = ' + myFuncPro(1,2,3,4));
console.log('================');


/**
 * 链式调用 : Calculate
 * 注意 : 形参 start (相当于 Calculate 根部 var start = ; 属于Calculate函数内部的全局变量)
 *        区分, this.start  和 var start 的不同结果
 * @param start
 * @constructor
 */
function Calculate(start) {
	this.add = function (val) {
		start = start + val;
		return this;
	};

	this.multiply = function (val) {
		start = start * val;
		return this;
	};

	this.equal = function (callback) {
		callback(start);
		return this;
	};

}

new Calculate(0)
	.add(1)
	.add(2)
	.multiply(3)
	.equal(function (result) {
		console.log(result);
		console.log('================');
	})

/**
 * Observable properties (可观察)
 * @param name
 * @param price
 * @constructor
 */
function Books (name, price) {
	var priceChanging = [],
		priceChanged = [];

	this.name = function () {
		return name;
	};
	this.price = function (val) {
		if(val !== undefined && val !== price){
			for (var i =0; i<priceChanging.length; i++) {
				if(!priceChanging[i](this, val)){
					return price;
				}
			}
			price = val;
			for (var i =0; i<priceChanged.length; i++) {
				priceChanged[i](this)
			}
		}
		return price;
	};
	this.onPriceChanging = function (callback) {
		priceChanging.push(callback);
	};
	this.onPriceChanged = function (callback) {
		priceChanged.push(callback);
	};
}
var jsGoodParts = new Books('The Javascript Good Parts', 22.9);
console.log('The name is :' + jsGoodParts.name());
console.log('The price is : $' + jsGoodParts.price());

jsGoodParts.onPriceChanging(function(b, price){
	if(price > 100){
		console.log('System error, price has gone unexpectedly high');
		return false
	}
	return true;
})
jsGoodParts.onPriceChanged(function(b){
	console.log('The book price has changed to : $' + b.price());
})
// push 方法的妙用 : 同名onPriceChanged
//jsGoodParts.onPriceChanged(function(){
//	console.log('successed!');
//})

jsGoodParts.price(22);
jsGoodParts.price(100);
jsGoodParts.price(300);
console.log(jsGoodParts.price())
console.log('================');


/**
 * ES5 语法 : set, get 内部方法
 * @constructor
 */
function BookPro () {
	var name = '';
	Object.defineProperty(this, 'name', {
		get : function () {
			return name;
		},
		set : function (val) {
			name = val;
			console.log(name);
		}
	})
}

var jsGoodPartsPro = new BookPro();
jsGoodPartsPro.name = "javascript good parts";
jsGoodPartsPro.name;
