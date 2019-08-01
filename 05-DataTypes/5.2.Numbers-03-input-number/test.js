describe("readNumber", function() {
    let promptStub;

    beforeEach(function() {
        promptStub = sinon.stub(window, "prompt");
    });

    afterEach(function() {
        promptStub.restore();
    });

    it("for user input '0' returns 0", function() {
        promptStub.returns("0");
        assert.strictEqual(readNumber(), 0);
    });

    it("for user input '123' returns 123", function() {
        promptStub.returns("123");
        assert.strictEqual(readNumber(), 123);
    });

    it("prompts for input till it gets a number", function() {
        promptStub.onCall(0).returns("str");
        promptStub.onCall(1).returns(NaN);
        promptStub.onCall(2).returns(undefined);
        promptStub.onCall(3).returns("1");

        assert.strictEqual(readNumber(), 1); 
    });

    it("stops process and returns null when empty line", function() {
        promptStub.returns("");

        assert.strictEqual(readNumber(), null);
    });

    it("stops process and returns null when CANCEL pressed", function() {
        promptStub.returns(null);

        assert.strictEqual(readNumber(), null);
    });

});