describe('getDateAgo', () => {
    let startDate = new Date(2019, 0, 2);

    it('for 2019-1-2 returns 1 day before as: 1st', () => {
        assert.equal(getDateAgo(startDate, 1), 1);
    });

    it('for 2019-1-2 returns 2 days before as: 31th', () => {
        assert.equal(getDateAgo(startDate, 2), 31);
    });

    it('for 2019-1-2 returns 365 days before as: 2nd', () => {
        assert.equal(getDateAgo(startDate, 365), 2);
    });

    it('for 2019-1-2 returns 31 days before as: 2nd', () => {
        let numOfDays = 31 * 24 * 3600 * 1000
        let testdaysBefore = new Date(startDate.getTime() - numOfDays);

        assert.equal(getDateAgo(startDate, 31), testdaysBefore.getDate());
    });

    it("doesn't modify the given date", () => {
        getDateAgo(startDate, 1);
        let testDate = new Date(2019, 0, 2);

        assert.deepEqual(testDate, startDate);
    });
});