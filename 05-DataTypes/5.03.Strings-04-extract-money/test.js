describe("extractCurrencyValue", function() {
    it("extracts number from string containing price", function() {
        assert.strictEqual( extractCurrencyValue("$123"), 123);
    });
});