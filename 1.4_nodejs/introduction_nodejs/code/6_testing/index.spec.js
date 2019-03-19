var should = require("chai").should();
var fun = require("./mathfun");

describe("Math Funs", () => {
  describe("when used synchronously", () => {
    it("should double even numbers correctly", () => {
      fun.evenDoublerSync(2).should.equal(4);
    });
    it("should throw on odd numbers", () => {
      (function() {
        fun.evenDoublerSync(3);
      }.should.throw(Error, /Odd/)); //.should.throw(/Odd/));
    });
  });

  describe("when used synchronously", () => {
    it("should double even numbers correctly", done => {
      fun.evenDoubler(2, function(err, data) {
        should.not.exist(err);
        data.should.equal(4);
        done();
      });
    });
    it("should throw on odd numbers", done => {
      fun.evenDoubler(3, function(err, data) {
        should.exist(err);
        should.not.exist(data);
        done();
      });
    });
  });
});
