/**
 * Created by biankai on 14/12/17.
 */
var db = require('./../db.js'),
    util = require('util');
var bodyParser = require('body-parser');

exports.index = function(req, res){
    res.render('customer/index', {title: 'Customer List', customers : db.listCustomers()});
}

exports.create = function(req, res){
    res.render('customer/create');
}

exports.createCustomer = function(req, res){
    db.addCustomer({name : req.body.name, email : req.body.email, telephone : req.body.telephone})
    res.redirect('/customer');
}

exports.edit = function(req, res){
    var customer = db.getCustomerById(req.params.id);
    res.render('customer/edit',{customer:customer});
}

exports.editCustomer = function(req, res){
    db.deleteCustomer(req.params.id);
    res.redirect('/customer');
}

exports.delete = function(req, res){
    db.updateCustomer({id: req.params.id, name : req.body.name, email : req.body.email, telephone : req.body.telephone})
    res.redirect('/customer');
}