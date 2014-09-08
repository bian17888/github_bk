// 2_test_currency.js

var currency = require('./1_currency');

console.log('===== US to Canadian =====');
console.log(currency.usToCanadian(100));
console.log('===== Canadian to US =====');
console.log(currency.canadianToUs(100));