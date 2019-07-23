describe("unique", function() {
    let testArray = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"];

    it("leaves original array unchanged", function() {
        unique(testArray);

        assert.deepEqual(testArray, ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"]);
    });
    
    it("returns array with only unique elements", function() {
        assert.deepEqual(unique(testArray), ["Hare", "Krishna", ":-O"]);
    });
});