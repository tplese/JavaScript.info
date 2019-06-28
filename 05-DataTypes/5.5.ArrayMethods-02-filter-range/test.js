describe("filterRange", function() {
    let initialArray = [5, 3, 8, 1];
    
    it("returns initial array unchanged", function() {
        filterRange(initialArray, 1, 4);
        
        assert.deepEqual(initialArray, [5, 3, 8, 1]);
    });

    it("when a=1, b=4, returns only values between 1 and 4", function() {
        assert.deepEqual(filterRange(initialArray, 1, 4), [3, 1]);
    });
});