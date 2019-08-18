describe("checkSpam", function() {

    it("returns 'true' if string contains 'viagra'", function() {
        assert.isTrue( checkSpam("This contains ViAgRa") );
    });

    it("returns 'true' if string contains 'XXX'", function() {
        assert.isTrue( checkSpam("Check out this XxX video") );
    });
    it("returns 'false' in other cases", function() {
        assert.isFalse( checkSpam("anything") );
    });
});