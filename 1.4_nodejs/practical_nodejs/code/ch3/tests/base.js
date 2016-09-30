/**
 * Created by bian17888 on 15/11/10.
 */
var expect = require('expect.js');

describe('expect.js demo', function(){
	it('should equal', function (done) {
		expect('a').to.be('a');
		done();
	})
})