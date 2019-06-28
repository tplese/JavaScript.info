describe("visitorSum", function() {
    let promptStub;

    before(function() {
        promptStub = sinon.stub(window, "prompt");
    });
    
    it("prompts visitor for two numbers", function() {
        read();
        sinon.assert.calledTwice(promptStub);
    });

    it("for 2 and 3 returns sum of 5", function() {
        assert.equal(visitorSum(2, 3), 5);
    });

    after(function() {
        promptStub.restore();
    });
});