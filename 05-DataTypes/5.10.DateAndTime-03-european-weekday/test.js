describe('getLocalDay', () => {
    it('shows 6 for Saturday date', () => {
        assert.equal(getLocalDay( new Date(2019, 6, 27) ), 6);
    });

    it('shows 7 for Sunday date', () => {
        assert.equal(getLocalDay( new Date(2019, 6, 28) ), 7);
    });

    it('shows 1 for Monday date', () => {
        assert.equal(getLocalDay( new Date(2019, 6, 29) ), 1);
    });
});
