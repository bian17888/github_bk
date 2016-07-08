/**
 * Created by biankai on 14/12/17.
 */

var express = require('express'),
    serveStatic = require('serve-static'),
    path = require('path'),
    bodyParser = require('body-parser'),
    multer = require('multer');
var Home = require('./routes/home.js'),
    Customer = require('./routes/customer.js');
var app = express();

/* ====== Set ====== */
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


/* ====== Use ====== */
app.use(serveStatic(path.join(__dirname, 'public')));
// 下面三个为POST请求需要依赖的中间件
app.use(bodyParser.json());// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

/* ====== Routes ====== */
app.get('/' , Home.index);
app.get('/contact' , Home.contact);
app.get('/customer' , Customer.index);
app.get('/customer/create' , Customer.create);
app.post('/customer/create' , Customer.createCustomer);
app.get('/customer/edit/:id' , Customer.edit);
app.post('/customer/edit/:id' , Customer.editCustomer);
app.del('/customer/edit/:id' , Customer.delete);


app.locals.clock = {datetime : new Date().toUTCString()};

app.listen(3000);