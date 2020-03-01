describe('spy', function() {
    before(function() {
        this.clock = sinon.useFakeTimers();
    });

    after(function() {
        this.clock.restore();
    });
    it('saves calls as arrays of arguments', function() {
        
        let testWork = spy(work);
        testWork(1, 2);
        testWork(3, 4);

        //alert(testWork.calls);
        this.clock.tick(2000);
        assert.deepEqual(testWork.calls, [[1, 2], [3, 4]]);
    });
});