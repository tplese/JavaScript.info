describe('inBetween', () => {

    it('returns numbers between 3 and 6 (inclusively)', () => {
        let testFunction = inBetween(3, 6);
        
        assert.isTrue( testFunction(3) );
        assert.isTrue( testFunction(5) );
        assert.isTrue( testFunction(6) );
        assert.isFalse( testFunction(2) );
        assert.isFalse( testFunction(7) );
    });
});

describe('inArray', () => {
    let testArray = [1, 2, 3, 4, 5, 6, 7];

    it('returns true if numbers from testArray match with [1, 2, 10]', () => {
        let testFunction = inArray(testArray);

        assert.isTrue( testFunction(1) );
        assert.isTrue( testFunction(2) );
        assert.isFalse( testFunction(10) );
    });
});