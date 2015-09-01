/*
 * 原型继承
 */
function object(P) {
    var F = function() {};
    F.prototype = P;
    return new F();
}

// 构造函数
function Parent () {
	this._name = 'parent constructor';
}

// 构造函数原型的属性
Parent.prototype.getName = function(){
	console.log(this._name);
}

// 创建 parent 对象
var parent = new Parent();
// 继承 parent 对象
var child = object(parent);

console.dir(child);
