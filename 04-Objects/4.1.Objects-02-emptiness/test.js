"use strict";

describe("emptiness", function() {
    
    it("returns true if no properties", function() {
        assert.isTrue( isEmpty({}) );
    });

    it("returns false if properties exist", function() {
        assert.isFalse( isEmpty({
            anything: false
        }) );
    });
});