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
    res.render('home', {title : "home page", caseInfo : db.listCaseInfo()})
}

/* 首页form请求数据 */
exports.sendIdIp = function(req, res){
    var timenow,
        dealvalue;
    var resData = {success:1};

    databody = req.body;
//    console.dir(databody);
    timeNow = new Date().getTime();
//    console.log(timeNow);

    dealValue = sha1(timeNow+'2TTGF2BCOBEZOSJRWIUA');
    optionspost = {
        host : '10.0.3.202',
        port : '8066',
        path : '/console/rds/api/inner/instance/detail/query?uuid=' + databody.uuid + '&ip=' + databody.ip,
        method : 'GET',
        headers : {
            "timestamp" : timeNow,     //timeNow
            "key" : dealValue,  //dealValue
            "X-Requested-With" : "XMLHttpRequest"
        }
    };

    var reqPost = http.request(optionspost, function(resPost){
        var str = '';
        console.log('STATUS: ' + resPost.statusCode);
        console.log('HEADERS: ' + JSON.stringify(resPost.headers));
        resPost.on('data', function(chunk){
            console.log('===================');
            console.log(typeof(chunk));
            console.log(chunk);
            str += chunk;
        });
        resPost.on('end', function(){
            var status;
            console.log('000000');
            console.log(typeof(str));
            console.log(str);
            status = db.judgeCaseInfo(str);
            console.log('status------'+status);
            if(status){
                res.send(str);
                var dataM = {};
//            console.log('=========');
//            console.log(typeof(str));
                var allData = JSON.parse(str);
//            console.log(typeof(allData));
                dataM.rdsName = allData.instance.rdsName;
                dataM.rdsId = allData.instance.rdsId;
                dataM.ram = allData.flavor.ram;
                dataM.disk = allData.flavor.disk;
                dataM.region = allData.instance.region;
                db.saveCaseInfo(dataM);
            }
            else {
                res.send(str);
            }
        })
    });
    reqPost.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    reqPost.end();
}