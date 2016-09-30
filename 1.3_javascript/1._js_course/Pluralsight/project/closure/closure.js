/*
 * Demo01 : 基本闭包
 *
 */
function foo() {
    var bar = 'bar';
    return function() {
        console.log('bar');
    }
}

function bam() {
    foo()();
}

bam();




/*
 * Demo02 : 学习闭包, 容易出错的例子 
 * 思考 : 为什么会出现这种情况?
 */
// 错误写法
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function() {
//         console.log('i : ' + i);
//     }, i * 1000);
// }
// 输出 : 6(5次)

//正确写法
for (var i = 1; i <= 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log('i : ' + i);
        }, i * 1000);
    }(i))
}
// 输出 : 1 2 3 4 5




/*
 * Demo03 : classic module pattern
 *
 */
var foo03 = (function(){

	var o = { bar : 'var'};

	return {
		bar : function () {
			console.log(o.bar);
		}
	}

}())

foo03.bar();




/*
 * Demo04 : modified module pattern
 * 说明 : 共有 API 的写法
 */
var foo04 = (function(){

	var publicApi = {
		bar : function () {
			publicApi.baz();
		},
		baz : function () {
			console.log('baz');
		}			
	};

	return publicApi;

}())

foo04.bar();



























