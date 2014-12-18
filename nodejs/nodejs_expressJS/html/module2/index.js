/**
 * Created by biankai on 14/12/17.
 */

var express = require('express');
var Home = require('./routes/home.js'),
    Customer = require('./routes/customer.js');

var app = express();

/* ===== Route ===== */
/* Route : home page */
app.get('/', Home.index);
/* Route : customer page */
app.get('/customer/:id', Customer.id);          // example: customer/20
app.get('/customer', Customer.query);           // example: customer?id=700
app.get(/^\/range\/(\d+)(?:\.\.(\d+))?$/, Customer.expreg);         // example: range/100..300


/* ===== Configure ===== */
if('development' === app.get('env')){
    app.get('/env/', function (req, res) {
        res.end('development');
    });
}
else if ('production' === app.get('env')){
    app.get('/env/', function (req, res) {
        res.end('production');
    });
}

app.listen(3000)