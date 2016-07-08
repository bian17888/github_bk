// 2_test_currency.js

var Currency = require('./2_currency');

var canadianDollar = 0.91;
var currency = new Currency(canadianDollar);

console.log('===== US to Canadian =====');
console.log(currency.usToCanadian(100));
console.log('===== Canadian to US =====');
console.log(currency.canadianToUs(100));
