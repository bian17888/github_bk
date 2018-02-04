/**
 * @file array
 * @author bian17888 2017/9/15 15:45
 */

// 转换
var str = 'I am a book !';
var arr = ['book', 'name', 'is', 'Javascript'];
var nums = [5, 3, 2, 7, 995, 3, 7, 56];

var str2Arr = str.split(' ');
var arr2Str = arr.join('__');
//var arr2Str = arr.toString();

/**
 * 方法们
 * 一 增删改查
 * 二 连接 排序 反转
 * 三 遍历
 */
// 1.1 增
var resultPush = arr.push('pushStr');                         // 返回新增后的数组长度
var resultUnshift = arr.unshift('unshiftStr');

var resultSliceAdd = arr.splice(1, 0, 'add1', 'add2', 'add3');    // null

// 1.2 删
var resultPop = arr.pop('popStr');                          // 返回删除元素
var resultshift = arr.shift('shiftStr');

var resultSliceDelete = arr.splice(1, 3);                         // 1 返回删除的数组 -> ['add1', 'add2', 'add3']; 2 原数组被改变

// 1.3 查
var resultSearch = arr.indexOf('Javascript'); // 1 区分大小写; 2 返回索引,没找到-1

// 2.1 连接
var resultConcat = arr.concat([1, 2, 3]);                 // 返回新数组 ; 对原数组不影响

// 2.2 反转
resultConcat.reverse();

// 2.3 排序
function compare(num1, num2) {
  return num1 - num2;
}
nums.sort(compare);

// 3.1 不生成新数组 forEach every some reduce
var xx = nums.forEach(function (val, key) {
  console.log('val --- ' + val);
  console.log('key --- ' + key);
});

