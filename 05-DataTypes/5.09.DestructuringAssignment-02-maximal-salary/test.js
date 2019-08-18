<<<<<<< HEAD
describe("topSalary", function() {
    it("returns highest paid person from object", function() {
        let testSalaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };

        assert.deepEqual(topSalary(testSalaries), "Pete");
    });

    it("returns 'null' when object is empty", function() {
        let testSalaries = {};

        assert.deepEqual(topSalary(testSalaries), null);
    });
=======
describe("topSalary", function() {
    it("returns highest paid person from object", function() {
        let testSalaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };

        assert.deepEqual(topSalary(testSalaries), "Pete");
    });

    it("returns 'null' when object is empty", function() {
        let testSalaries = {};

        assert.deepEqual(topSalary(testSalaries), null);
    });
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
});