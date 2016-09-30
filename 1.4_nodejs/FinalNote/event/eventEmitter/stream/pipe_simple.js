/**
 * @fileOverview pipe
 * @desc
 * @author bian17888 16/8/19 10:53
 */

var request = require('request');
var fs = require('fs');

request('http://www.taobao.com').pipe(fs.createWriteStream('./output/taobao.html'));
