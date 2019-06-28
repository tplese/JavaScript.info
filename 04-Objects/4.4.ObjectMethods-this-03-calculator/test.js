describe ("calculator", function() {
    it("prompts user for a", function() {
        assert.isNumber(calculator.a);
    });
    it("prompts user for b", function() {
        assert.isNumber(calculator.b);
    });
    
    let testA = calculator.a;
    let testB = calculator.b;

    function makeSumTest() {
        let expected = testA + testB;
        it(`sum of ${testA} and ${testB} is ${expected}`, function() {
            assert.equal(calculator.sum(), expected);
        });
    }

    function makeMulTest() {
        let expected = testA * testB;
        it(`sum of ${testA} and ${testB} is ${expected}`, function() {
            assert.equal(calculator.mul(), expected);
        });
    }

    makeSumTest();
    makeMulTest();
});