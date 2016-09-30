/**
 * Created by biankai on 15/4/25.
 */

/**
 * for循环 : 缓存数组 length
 */
var myArray = [1, 2, 3, 4, 5];
for (var i = 0, max = myArray.length; i < max; i++) {
	// do something
}


/**
 * for循环 : 小优化01
 */
var myArray = [1, 2, 3, 4, 5];
var i, myArray = [];

for (i = myArray.length; i--;) {
	// do something
}


/**
 * for循环 : 小优化02
 */
var myArray = [1, 2, 3, 4, 5];
var i = myArray.length;
while (i--) {
	// do something
}


console.log(Number('08'));