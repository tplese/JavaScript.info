<<<<<<< HEAD
describe("getAverageAge", function() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let testArray = [john, pete, mary];

    it("for ages 25, 30, 29, returns average of 28", function() {
        assert.strictEqual(getAverageAge(testArray), 28);
    });
=======
describe("getAverageAge", function() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let testArray = [john, pete, mary];

    it("for ages 25, 30, 29, returns average of 28", function() {
        assert.strictEqual(getAverageAge(testArray), 28);
    });
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
});