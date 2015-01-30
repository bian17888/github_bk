/**
 * Created by biankai on 14/12/18.
 */
var sha1 = require('node-sha1'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    path = require('path'),
    http = require('http'),
    superagent = require('superagent');

var db = require('./../db.js');

/* 首页路由 */
exports.index = function(req, res){
    res.render('monitor', {title : "监控详情页",caseInfoDb:db.listCaseInfo()})
}

/* 首页form请求数据 */
exports.sendMonitorInfo = function(req, res){
    var timenow,
        dealvalue;
    var resData = {success:1};

    databody = req.body;
    timeNow = new Date().getTime();
    dealValue = sha1(timeNow+'2TTGF2BCOBEZOSJRWIUA');

    optionspost = {
        host : '10.0.3.202',
        port : '8066',
        path : '/console/rds/api/inner/instance/monitor/metric/general?metric=' + databody.metric + '&uuid=' + databody.uuid + '&time_type=' + databody.time_type + '&time_value=' + databody.time_value,
        method : 'GET',
        headers : {
            "timestamp" : timeNow,
            "key" : dealValue,
            "X-Requested-With" : "XMLHttpRequest"
        }
    };
//    res.setHeader('Content-Type','application/json;charset=UTF-8');
    var reqPost = http.request(optionspost, function(resPost){
        var str = '';
//        console.log('STATUS: ' + resPost.statusCode);
//        console.log('HEADERS: ' + JSON.stringify(resPost.headers));
        resPost.on('data', function(chunk){
            str += chunk;
        });
        resPost.on('end', function(){
            res.send(str);
        });
    });
    reqPost.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    reqPost.end();
}