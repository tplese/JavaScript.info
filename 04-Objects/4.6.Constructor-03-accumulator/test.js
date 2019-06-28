describe("Accumulator", function() {
    
    let promptStub;
    let testAccumulator;
    let initialValue;
    let expectedValue;

    before(function() {
        promptStub = sinon.stub(window, "prompt");
    });

    beforeEach(function() {
        testAccumulator = new Accumulator(1);
        initialValue = testAccumulator.value;
    });

    it("checks that starting value is 1", function() {
        assert.equal(testAccumulator.value, 1);
    });

    it("prompts user for a value", function() {
        testAccumulator.read();
        sinon.assert.calledOnce(promptStub);
    });
    
    it("for user integer 0, value is 1", function() {
        promptStub.returns("0");
        testAccumulator.read();
        expectedValue = initialValue + 0;
        assert.equal(testAccumulator.value, expectedValue);
    });

    it("for user integer 1, value is 2", function() {
        promptStub.returns("1");
        testAccumulator.read();
        expectedValue = initialValue + 1;
        assert.equal(testAccumulator.value, expectedValue);
    });

    after(function() {
        promptStub.restore();
    });
});