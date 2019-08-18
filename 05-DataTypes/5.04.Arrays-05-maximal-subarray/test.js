describe("getMaxSubSum", function() {
  it("returns 5 for [-1, 2, 3, -9]", function() {
    assert.equal( getMaxSubSum([-1, 2, 3, -9]), 5 );
  });

  it("returns 6 for [2, -1, 2, 3, -9]", function() {
    assert.equal( getMaxSubSum([2, -1, 2, 3, -9]), 6 );
  });

  it("returns 11 for [2, -1, 2, 3, -9]", function() {
    assert.equal( getMaxSubSum([-1, 2, 3, -9, 11]), 11 );
  });

  it("returns 3 for [-2, -1, 1, 2]", function() {
    assert.equal( getMaxSubSum([-2, -1, 1, 2]), 3 );
  });

  it("returns 100 for [100, -9, 2, -3, 5]", function() {
    assert.equal( getMaxSubSum([100, -9, 2, -3, 5]), 100 );
  });

  it("returns 6 for [1, 2, 3]", function() {
    assert.equal( getMaxSubSum([1, 2, 3]), 6 );
  });

  it("returns 6 for [1, -9, 2, 3, -1, -1, 3, -3]", function() {
    assert.equal( getMaxSubSum([1, -9, 2, 3, -1, -1, 3, -3]), 6 );
  });

  it("returns 6 for [1, -9, 2, 3, 0, 0, 0, -1, -1, 3, -3]", function() {
    assert.equal( getMaxSubSum([1, -9, 2, 3, 0, 0, 0, -1, -1, 3, -3]), 6 );
  });
  
  it("returns 0 for all negative numbers [-1, -2, -3]", function() {
    assert.equal( getMaxSubSum([-1, -2, -3]), 0 );
  });

  it("returns 0 for [-1]", function() {
    assert.equal( getMaxSubSum([-1]), 0 );
  });

  it("returns 0 for empty array []", function() {
    assert.equal( getMaxSubSum([]), 0 );
  });
});