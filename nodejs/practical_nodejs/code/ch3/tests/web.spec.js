/**
 * Created by bian17888 on 15/11/10.
 */
var app = require('./../app.js').app;
var boot = require('./../app.js').boot;
var shut = require('./../app.js').shut;

var supertest = require('supertest').agent(app.listen());

describe('boot server', function () {
	before(function () {
		boot();
		console.log('start');
	})
})

describe('homepage', function () {

	it('run without any errors', function (done) {
		supertest
			.get('/')
			.expect(200)
			.end(done)
	});

})

after(function () {
	shut();
})