describe("sortByAge", function() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let testArray = [pete, john, mary];

    it("sorts users by age", function() {
        sortByAge(testArray);

        assert.deepEqual(testArray, [john, mary, pete]);
    });
});