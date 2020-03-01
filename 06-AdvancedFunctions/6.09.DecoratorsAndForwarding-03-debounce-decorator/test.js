describe('debounce', function() {
    before(function() {
        this.clock = sinon.useFakeTimers();
    });

    after(function() {
        this.clock.restore();
    });

    it('passes the call to f once per 1000 ms', function() {
        let spy = sinon.spy(window, "alert");
        
        let testFunc = debounce(spy, 1500);
        
        // 3 calls - should pass only 1st and 3rd call
        testFunc("test 1");
        testFunc("test 2");
        setTimeout(() => testFunc("test 3"), 100);
        setTimeout(() => testFunc("test 4"), 1100);
        setTimeout(() => testFunc("test 5"), 1500);
        this.clock.tick(2000);

        sinon.assert.calledTwice(spy);
    });
});