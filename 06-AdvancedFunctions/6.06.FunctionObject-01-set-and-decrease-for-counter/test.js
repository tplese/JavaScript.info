describe('makeCounter', () => {
    let testCounter = makeCounter();

    it('after count=1, next "counter()" returns 2', () => {
        testCounter.count = 1;

        assert.equal(testCounter(), 1);
        assert.equal(testCounter(), 2);
    });

    it('"counter.set(2)" sets count to 2', () => {
        assert.equal(testCounter.set(2), 2);
    });

    it('for count=3 "counter.decrease()" returns 2', () => {
        testCounter.set(3);
        
        assert.equal(testCounter.decrease(), 2);
    });
});