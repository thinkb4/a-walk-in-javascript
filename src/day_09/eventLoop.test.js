
describe('DAY 9: Event Loop', () => {

    it(`modify the initial expression of the for loop to pass the test`, done => {

        var i = 0;
        /**
         * 
         * @param {number} i 
         * @returns {undefined}
         */
        function counter (i) {
            if (i === 3) {
                done();
            }
        }

        for (var i = 0; i < 4; i++) {
            setTimeout(() => counter(i), 0);
        }

        expect(i).toBe(0);
    });
});
