describe("sumInput", function() {
    let promptStub;
    theArray.length = 0;

    before(function() {
        promptStub = sinon.stub(window, "prompt");
    });

    it("stores user input into array until STRING entered", function() {
        promptStub.onCall(0).returns("2");
        promptStub.onCall(1).returns("3");
        promptStub.onCall(2).returns("7");
        promptStub.onCall(3).returns("string");

        sumInput();

        assert.sameOrderedMembers(theArray, [2, 3, 7]);
    });

    it("stores user input into array until EMPTY STRING entered", function() {
        promptStub.onCall(0).returns("2");
        promptStub.onCall(1).returns("3");
        promptStub.onCall(2).returns("7");
        promptStub.onCall(3).returns("");

        sumInput();

        assert.sameOrderedMembers(theArray, [2, 3, 7]);
    });

    it("stores user input into array until CANCEL pressed", function() {
        promptStub.onCall(0).returns("2");
        promptStub.onCall(1).returns("3");
        promptStub.onCall(2).returns("7");
        promptStub.onCall(3).returns(null);

        sumInput();

        assert.sameOrderedMembers(theArray, [2, 3, 7]);
    });

    it("returns the sum of array items", function() {
        promptStub.onCall(0).returns("2");
        promptStub.onCall(1).returns("3");
        promptStub.onCall(2).returns("7");
        promptStub.onCall(3).returns(null);

        assert.strictEqual( sumInput(), 12 );
    });

    after(function() {
        promptStub.restore();
    });
});