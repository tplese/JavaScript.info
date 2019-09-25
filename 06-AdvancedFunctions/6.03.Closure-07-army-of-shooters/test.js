describe('makeArmy', () => {
    let testArmy = makeArmy();
    
    before(function() {
        window.alert = sinon.stub(window, "alert");
    });

    it('returns 0 for "testArmy[0]"', () => {
        testArmy[0]();
        
        assert( alert.calledWith(0) );
    });

    it('returns 5 for "testArmy[5]"', () => {
        testArmy[5]();
        
        assert( alert.calledWith(5) );
    });

    after(function() {
        window.alert.restore();
    });
});