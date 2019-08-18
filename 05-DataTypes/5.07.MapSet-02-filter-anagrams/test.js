<<<<<<< HEAD
describe("aclean", () => {
    let testArray = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    it("returns ony one word from each anagram group", function() {
        assert.deepEqual(aclean(testArray), ["nap", "teachers", "ear"]);
    });
=======
describe("aclean", () => {
    let testArray = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    it("returns ony one word from each anagram group", function() {
        assert.deepEqual(aclean(testArray), ["nap", "teachers", "ear"]);
    });
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
});