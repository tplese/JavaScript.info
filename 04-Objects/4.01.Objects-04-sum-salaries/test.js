"use strict";

describe("sum", function() {
    it("sum of all salaries is 390", function() {
        assert.equal(sum(salaries), 390);
    });
    it("if object empty, result is 0", function() {
        assert.equal(sum(undefined), 0);
    });
});