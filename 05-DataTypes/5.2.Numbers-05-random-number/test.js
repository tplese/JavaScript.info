describe("random", function() {
    it("for min=2 returns 2 or higher", function() {
        assert.isAbove(random(2, 6), 2)
    });

    it("for max=6 returns less or higher", function() {
        assert.isBelow(random(2, 6), 6)
    });
});