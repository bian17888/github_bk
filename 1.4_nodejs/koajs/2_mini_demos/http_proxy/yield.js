function t0() {
	return 1
}

function *example() {
	/*
	 yield后面的值 不会直接返回给前面的变量
	 以下面的例子来看，就是：
	 a !== t0()
	 */
	var a = yield t0()
	console.log(a);
}

e = example();
// next的参数，会传递给
e.next()
e.next(12);
