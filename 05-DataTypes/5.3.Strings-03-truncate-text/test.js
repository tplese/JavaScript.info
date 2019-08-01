describe("truncate", function() {
    it("for strings shorter than maxlength, returns as is", function() {
        assert.strictEqual( truncate("Hello World", 20), "Hello World");
    });

    function longerThanMax() {
        let returnString = truncate("Hello World", 10);
        
        it("shortens longer strings to maxlength", function() {
            assert.isTrue( returnString.length === 10 );
        });

        it(`for string longer than maxlength, ends with ${String.fromCodePoint(8230)}`, function() {
            assert.strictEqual( returnString[9], String.fromCodePoint(8230) );
        });

    }
    
    longerThanMax();
});