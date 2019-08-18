describe("ucFirst", function() {  
    it("returns uppercasted first character", function() {
        assert.strictEqual( ucFirst("mario"), "Mario");
    });

    it("returns empty string when argument empty", function() {
        assert.strictEqual( ucFirst(""), "");
    });
});