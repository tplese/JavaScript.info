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
});