describe("randomInteger", function() {
    it("for min=2 returns 2 or higher", function() {
        assert.isAtLeast(randomInteger(2, 6), 2)
    });

    it("for max=6 returns less or higher", function() {
        assert.isAtMost(randomInteger(2, 6), 6)
    });

    it("checks that random number is integer", function() {
        assert.isTrue(Number.isSafeInteger( randomInteger(2, 6) ));
    });
});