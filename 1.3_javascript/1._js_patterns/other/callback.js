/**
 * Created by biankai on 15/1/29.
 * 说明: 回调函数的应用, 解耦功能
 */

window.onload = function () {
	/*
	 * Demo01 : 基本模型
	 * */
	//var arrNew = doSomething(hideDom);
	//
	//
	//
	//
	//function doSomething(callback) {
	//	var i,
	//		arrNew = [],
	//		arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	//
	//	for (i = 0; i < arr.length; i++) {
	//		// 作为回调函数传入, 起到解耦功能
	//		callback(arr[i]);
	//
	//		if (arr[i] % 2 === 0) {
	//			arrNew.push(arr[i])
	//		}
	//	}
	//
	//	return arrNew;
	//}
	//
	//
	//
	//
	//function hideDom(str) {
	//	console.log(str);
	//}


	/*
	 * Demo02 : 回调函数为某对象的方法时
	 * */
	var myapp = {};
	myapp.color = "green";
	myapp.paint = function ($node) {
		$node.style.color = this.color;
	}


	// ==================== 错误用法 ====================
	// myapp.paint 方法,作为回调传入;  **** myapp.paint中的对象this,在 findNodes 中引用了全局对象,而不是定义时的 myapp
	//function findNodes(callback) {
	//	// ...
	//	if (typeof callback === "function") {
	//		callback(found)
	//	}
	//	// ...
	//}
	//
	//findNodes(myapp.paint);

	// ==================== 正确用法 ====================
	// 参数中要传递 该方法 + 该方法所属的对象
	function findNodes(callbacj, callback_obj) {
		// ...
		if (typeof callback === "function") {
			callback.call(callback_obj, found);
		}
		// ...
	}

	findNodes(myapp.paint, myapp);


	// ==================== 正确用法(Pro) ====================
	// 减少重复输入对象名
	//function findNodes(callbacj, callback_obj) {
	//
	//	if (typeof callback === "string") {
	//		callback = calllback_obj[callback];
	//	}
	//
	//	// ...
	//	if (typeof callback === "function") {
	//		callback.call(callback_obj, found);
	//	}
	//	// ...
	//}
	//
	//findNodes("paint", myapp);      // 对比 findNodes(myapp.paint, myapp), 减少每次都写入myapp重复字符


}

