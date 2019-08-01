describe('getLastDayOfMonth', () => {
    it('for February 2016 returns: 29', () => {
        assert.equal(getLastDayOfMonth(2016, 1), 29);
    });
    
    it('for February 2019 returns: 28', () => {
        assert.equal(getLastDayOfMonth(2019, 1), 28);
    });

    it('for June 2019 returns: 30', () => {
        assert.equal(getLastDayOfMonth(2019, 5), 30);
    });
    
    it('for July 2019 returns: 31', () => {
        assert.equal(getLastDayOfMonth(2019, 6), 31);
    });

    it
});