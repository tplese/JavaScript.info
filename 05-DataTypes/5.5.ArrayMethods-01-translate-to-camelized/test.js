describe("camelize", function() {
    it("for 'background-color' returns 'backgroundColor", function() {
        assert.strictEqual(camelize("background-color"), "backgroundColor");
    });

    it("for 'list-style-image' returns 'listStyleImage", function() {
        assert.strictEqual(camelize("list-style-image"), "listStyleImage");
    });

    it("for '-webkit-transition' returns 'WebkitTransition", function() {
        assert.strictEqual(camelize("-webkit-transition"), "WebkitTransition");
    });

    it("for empty string returns empty string", function() {
        assert.strictEqual(camelize(""), "");
    });
});