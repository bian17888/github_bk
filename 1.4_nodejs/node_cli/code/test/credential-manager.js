const chai = require("chai");
const should = chai.should();
const sinon = require("sinon");
const inquirer = require("inquirer");
const CredentialManager = require("../lib/credential-manager");

describe("a credential manager", () => {
  var creds;
  before(() => {
    creds = new CredentialManager("twine-test");
  });
  context("with not existing credentials", () => {
    it("should prompt the user", async () => {
      sinon.stub(inquirer, "prompt").resolves({ key: "foo", secret: "bar" });
      let [key, secret] = await creds.getKeyAndSecret();
      key.should.equal("foo");
      secret.should.equal("bar");
      inquirer.prompt.restore();
    });
  });
  context("with existing credentials", () => {
    it("should return them", async () => {
      let [key, secret] = await creds.getKeyAndSecret();
      key.should.equal("foo");
      secret.should.equal("bar");
    });
  });
  after(() => {
    creds.conf.delete("apiKey");
    creds.conf.delete("apiSecret");
  });
});
