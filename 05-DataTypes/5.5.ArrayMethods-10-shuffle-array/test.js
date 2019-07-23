describe("shuffle", function() {
    let testTries = 1000000;
    let testAccuracy = 83;
    let testArray = [1, 2, 3];
    let count_123 = 0;
    let count_132 = 0;
    let count_213 = 0;
    let count_231 = 0;
    let count_312 = 0;
    let count_321 = 0;
    let countOther = 0;

    before(function() {
        for (let i = 0; i < testTries; i++) {
            shuffle(testArray);
    
            switch ( testArray.join() ) {
                case "1,2,3":
                    count_123++;
                    break;
                case "1,3,2":
                    count_132++;
                    break;
                case "2,1,3":
                    count_213++;
                    break;
                case "2,3,1":
                    count_231++;
                    break;
                case "3,1,2":
                    count_312++;
                    break;
                case "3,2,1":
                    count_321++;
                    break;
                default:
                    countOther++;
            };
        };
    });
    
    it("checks that array contains only numbers 1, 2 and 3", function() {
        assert.equal(countOther, 0);
    });

    it("checks that [1, 2, 3] appears 1/6 of times", function() {
        assert.closeTo(count_123, testTries/6, testTries/testAccuracy);
    });

    it("checks that [1, 3, 2] appears 1/6 of times", function() {
        assert.closeTo(count_132, testTries/6, testTries/testAccuracy);
    });

    it("checks that [2, 1, 3] appears 1/6 of times", function() {
        assert.closeTo(count_213, testTries/6, testTries/testAccuracy);
    });

    it("checks that [2, 3, 1] appears 1/6 of times", function() {
        assert.closeTo(count_231, testTries/6, testTries/testAccuracy);
    });

    it("checks that [3, 1, 2] appears 1/6 of times", function() {
        assert.closeTo(count_312, testTries/6, testTries/testAccuracy);
    });

    it("checks that [3, 2, 1] appears 1/6 of times", function() {
        assert.closeTo(count_321, testTries/6, testTries/testAccuracy);
    });
});

/*
Distribution testing:
1,2,3
1,3,2
2,3,1
2,1,3
3,1,2
3,2,1
*/