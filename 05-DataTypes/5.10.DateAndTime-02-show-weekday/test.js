describe('getWeekDay', () => {
   it('returns "TU" for 3 Jan 2012', () => {
       assert.equal(getWeekDay( new Date(2012, 0, 3) ), "TU");
   }); 
});