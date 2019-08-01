describe("count", function() {
    it("returns 2 for object containing 2 properties", function() {
        let testUser = {
            name: 'John',
            age: 30
          };

        assert.deepEqual(count(testUser), 2);
    });

    it("returns 0 for empty object", function() {
        let testUser = {};
        assert.deepEqual(count(testUser), 0);
    });

    it("doesn't count symbolic properties", function() {
        let testUser = {
            [Symbol("id")]: 3
          };

        assert.deepEqual(count(testUser), 0);
    });
});