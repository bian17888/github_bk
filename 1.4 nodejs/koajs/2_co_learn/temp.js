/**
 * Created by bian17888 on 15/12/13.
 */

function * a() {
	yield 2;
}

var str = a().next();
console.log(str);
