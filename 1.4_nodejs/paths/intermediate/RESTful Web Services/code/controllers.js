/**
 * @fileOverview controllers
 * @desc
 * @author bian17888 16/11/28 14:19
 */

var parse = require('co-body');
var db = require('./models/bookModel');

module.exports = {
	index: index,
	book : book,
	insertBook : insertBook
};

//////////////////////////////////////////////////

function *index() {
	var self = this;
	var books = yield db.findCollection('books', self.query);

	self.status = 200;
	self.body = books;
}

function *book(bookId) {
	var self = this;
	var book = yield db.findCollectionById('books', bookId);

	self.status = 200;
	self.body = book;
}

function *insertBook() {
	var self = this;

	var body = yield parse.json(self);
	var result = yield db.insertCollection('books', body);

	self.status = 201;
	self.body = result;
}