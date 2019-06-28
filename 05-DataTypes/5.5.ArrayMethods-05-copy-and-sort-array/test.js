describe("copySorted", function() {
    let initialArray = ["HTML", "JavaScript", "CSS"];

    it("returns new array sorted by Unicode", function() {
        assert.deepEqual(copySorted(initialArray), ["CSS", "HTML", "JavaScript"]);        
    });

    it("leaves initial array unmodified", function() {
        copySorted(initialArray);

        assert.deepEqual(initialArray, ["HTML", "JavaScript", "CSS"]);
    });
});