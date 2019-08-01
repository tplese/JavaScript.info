<<<<<<< HEAD
describe("sumSalaries", function() {
    it("returns sum of all salaries", function() {
        let testSalaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250           
        };

        let testSalariesSum = testSalaries.John + testSalaries.Pete + testSalaries.Mary;
        
        assert.deepEqual(sumSalaries(testSalaries), testSalariesSum);
    });

    it("returns zero if salaries object is empty", function() {
        let testSalaries = {};
        let testSalariesSum = 0;
        
        assert.deepEqual(sumSalaries(testSalaries), testSalariesSum);
    });
=======
describe("sumSalaries", function() {
    it("returns sum of all salaries", function() {
        let testSalaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250           
        };

        let testSalariesSum = testSalaries.John + testSalaries.Pete + testSalaries.Mary;
        
        assert.deepEqual(sumSalaries(testSalaries), testSalariesSum);
    });

    it("returns zero if salaries object is empty", function() {
        let testSalaries = {};
        let testSalariesSum = 0;
        
        assert.deepEqual(sumSalaries(testSalaries), testSalariesSum);
    });
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
});