
describe('DAY 7: generators', () => {

    it(`complete the function code to pass the test`, () => {

        var msg = [`don't`, `repeat`, `yourself`];

        /**
         * Modify the function to return a Generator object
         * complete the body of the generator using a for...of statement
         * iterate over the iterable input and yeild the valuefor...of loop
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
         * 
         * @param {array} input
         * @returns {Generator}
         */
        function gen () {

        }

        let myGen = gen(msg);

        expect(myGen.next()).toEqual({ value: `don't`, done: false });
        expect(myGen.next()).toEqual({ value: `repeat`, done: false });
        expect(myGen.next()).toEqual({ value: `yourself`, done: false });
        expect(myGen.next()).toEqual({ value: undefined, done: true });

    });

});
