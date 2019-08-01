describe("calculator", function() {
    
    let promptSpy;
    let testA = calculator.intOne;
    let testB = calculator.intTwo;
    let expectedSum = testA + testB;
    let testSum;
    let expectedMul = testA * testB;
    let testMul;

    before(function() {
        // part of READ() test
        promptSpy = sinon.stub(window, "prompt");
        
        // part of SUM() test
        testSum = calculator.sum();
        
        // part of MUL() test
        testMul = calculator.mul();
    });

    it("tracks 2 prompt calls", function() {
        calculator.read();
        sinon.assert.calledTwice(promptSpy);
        promptSpy.restore();
    });

    it(`sum of ${calculator.intOne} 
        and ${calculator.intTwo} 
        is ${expectedSum}`, function() {
        
        assert.equal(testSum, expectedSum);
    });

    it(`multiplication of ${calculator.intOne} 
        and ${calculator.intTwo} 
        is ${expectedMul}`, function() {
        
        assert.equal(testMul, expectedMul);
    });
});