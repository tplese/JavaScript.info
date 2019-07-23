describe("aclean", () => {
    let testArray = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    it("returns ony one word from each anagram group", function() {
        assert.deepEqual(aclean(testArray), ["nap", "teachers", "ear"]);
    });
});