<<<<<<< HEAD
describe("unique", function() {
    let testArray = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

    it("leaves original array unchanged", function() {
        unique(testArray);

        assert.deepEqual(testArray, ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"]);
    });

    it("leaves only unique elements of an array", function() {
        assert.deepEqual(unique(testArray), ["Hare", "Krishna", ":-O"]);
    });
=======
describe("unique", function() {
    let testArray = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

    it("leaves original array unchanged", function() {
        unique(testArray);

        assert.deepEqual(testArray, ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"]);
    });

    it("leaves only unique elements of an array", function() {
        assert.deepEqual(unique(testArray), ["Hare", "Krishna", ":-O"]);
    });
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
});