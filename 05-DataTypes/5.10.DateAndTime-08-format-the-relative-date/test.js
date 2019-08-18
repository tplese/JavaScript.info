describe('formatDate', () => {
    it('returns "right now" if less than 1 second since "date"', () => {
        let currentTime = new Date(new Date - 1);

        assert.equal(formatDate(currentTime), "right now");
    });

    it('returns "30 sec. ago" if 1/2 minute since "date"', () => {
        let currentTime = new Date(new Date - 30 * 1000);

        assert.equal(formatDate(currentTime), "30 sec. ago");
    });

    it('returns "5 min. ago" if 5 min since "date"', () => {
        let currentTime = new Date(new Date - 5 * 60 * 1000);

        assert.equal(formatDate(currentTime), "5 min. ago");
    });

    it('returns "31.12.16 10:00" for 31.12.2016 10:00', () => {
        let currentTime = new Date(2016, 11, 31, 10, 0, 0);

        assert.equal(formatDate(currentTime), "31.12.16 10:00");
    });
});