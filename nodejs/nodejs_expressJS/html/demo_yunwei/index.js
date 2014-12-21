
var express = require('express'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    path = require('path'),
    http = require('http');

var Home = require('./routes/home.js'),
    Monitor = require('./routes/monitor.js');

var app = express();

/* ====== Set ====== */
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


/* ====== Use ====== */
app.use(serveStatic(path.join(__dirname, 'resources')));
// 下面三个为POST请求需要依赖的中间件
app.use(bodyParser.json());// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

/* ====== Routes ====== */
app.get('/' , Home.index);
app.post('/' , Home.sendIdIp);
app.get('/monitor', Monitor.index);
app.post('/monitor', Monitor.sendMonitorInfo);


app.listen(3000);
