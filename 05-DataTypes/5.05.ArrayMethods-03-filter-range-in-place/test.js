describe("filterRangeInPlace", function() {
    let initialArray = [5, 3, 8, 1];
    
    it("removes numbers between a=1 and b=4 in same array", function() {
        filterRangeInPlace(initialArray, 1, 4);

        assert.deepEqual(initialArray, [3, 1]);
    });

    it("function doesn't return anything", function() {
        assert.isUndefined( filterRangeInPlace(initialArray, 1, 4) );
    });


});