<<<<<<< HEAD
describe("Calculator", function() {
    describe("calculate", function() {
        let testCalculator;

        beforeEach(function() {
            testCalculator = new Calculator;
        });
        
        it("reads string '1 + 2' and returns 3", function() {
            assert.strictEqual(testCalculator.calculate("1 + 2"), 3);
        });

        it("reads string '3 - 1' and returns 2", function() {
            assert.strictEqual(testCalculator.calculate("3 - 1"), 2);
        });
    });

    describe("addMethod", function() {
        let testCalculator;

        beforeEach(function() {
            testCalculator = new Calculator;
        });

        it("for '2 * 3' returns 6", function() {
            testCalculator.addMethod("*", (a, b) => a * b);
            assert.strictEqual(testCalculator.calculate("2 * 3"), 6);
        });

        it("for '15 / 3' returns 5", function() {
            testCalculator.addMethod("/", (a, b) => a / b);
            assert.strictEqual(testCalculator.calculate("15 / 3"), 5);
        });

        it("for '2 ** 3' returns 8", function() {
            testCalculator.addMethod("**", (a, b) => a ** b);
            assert.strictEqual(testCalculator.calculate("2 ** 3"), 8);
        });
    });
=======
describe("Calculator", function() {
    describe("calculate", function() {
        let testCalculator;

        beforeEach(function() {
            testCalculator = new Calculator;
        });
        
        it("reads string '1 + 2' and returns 3", function() {
            assert.strictEqual(testCalculator.calculate("1 + 2"), 3);
        });

        it("reads string '3 - 1' and returns 2", function() {
            assert.strictEqual(testCalculator.calculate("3 - 1"), 2);
        });
    });

    describe("addMethod", function() {
        let testCalculator;

        beforeEach(function() {
            testCalculator = new Calculator;
        });

        it("for '2 * 3' returns 6", function() {
            testCalculator.addMethod("*", (a, b) => a * b);
            assert.strictEqual(testCalculator.calculate("2 * 3"), 6);
        });

        it("for '15 / 3' returns 5", function() {
            testCalculator.addMethod("/", (a, b) => a / b);
            assert.strictEqual(testCalculator.calculate("15 / 3"), 5);
        });

        it("for '2 ** 3' returns 8", function() {
            testCalculator.addMethod("**", (a, b) => a ** b);
            assert.strictEqual(testCalculator.calculate("2 ** 3"), 8);
        });
    });
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
});