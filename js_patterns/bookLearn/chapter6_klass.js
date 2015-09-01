function Parent(name) {
    this.name = name || 'default name';
    this.book = ['js', 'css'];
}

Parent.prototype.say = function() {
    console.log(this.name);
}

function Child() {
    Parent.apply(this, arguments);
}

// 调用继承方法
// inherit(Child, Parent);
// var child = new Child('child name');
// child.say();



/* ****************************** 各种模式 ****************************** */
/*
 * 圣杯函数
 */
// var inherit = (function() {

//     var F = function() {};

//     // 闭包 : 避免每次都创建 F
//     return function(C, P) {
//         F.prototype = P.prototype;
//         C.prototype = new F();
//         // 重置构造函数
//         C.prototype.constructor = C;
//         // 设置超类
//         C._super = P.prototype;
//     }

// }());


/*
 * 共享原型
 */
// function inherit (C, P) {
// 	C.prototype = P.prototype;
// 	// C.prototype.constructor = C;
// }


/*
 * 借用构造函数 : 多重继承
 */
// function Cat () {
// 	this._legs = 4;
// 	this._say = function () {
// 		console.log('meaowww');
// 	}
// }

// function Bird () {
// 	this._wings = 2;
// 	this._fly = true;
// }

// // 通过构函实现多重继承
// function CatWings (){
// 	Cat.apply(this);
// 	Bird.apply(this);
// }

// var jane = new CatWings();
// console.dir(jane);