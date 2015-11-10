/**
 * Created by bian17888 on 15/11/10.
 */
var expect = require('expect.js');

var expected, current;
before(function () {
	expected = ['a', 'b', 'c'];
})

describe('hook demo', function () {

	beforeEach(function () {
		current = 'a,b,c'.split(',');
	});

	it('should return an array', function () {
		expect(Array.isArray(current)).to.be.ok();
	});

	it('should return the same array', function () {
		expect(expected).to.have.length(current.length);
		for(var i = 0; i < expected.length; i++) {
			expect(expected[i]).to.be(current[i]);
		}
	})

})