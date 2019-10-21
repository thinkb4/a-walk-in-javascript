describe('DAY 6: Test Hoisting', () => {

    it(`myHoistedVariable should be hoisted as undefined,
        NOT to throw a reference error`, () => {

        expect(myHoistedVariable).toBeUndefined();

        // change the declaration statement to complete the test
        let myHoistedVariable = 3;
    });

    it(`myHoistedFunctionExpression should be hoisted as undefined,
        NOT to throw a reference error`, () => {

        expect(myHoistedFunctionExpression).toBeUndefined();

        // change the declaration statement to complete the test
        const myHoistedFunctionExpression = function () {

        };
    });

    it(`myHoistedFunctionDeclaration should be hoisted together with its body,
        NOT to throw a reference error`, () => {

        // change the expect clause to complete the test
        // @see https://jestjs.io/docs/en/expect documentation for help
        expect(myHoistedFunctionDeclaration).toThrow();

        /**
         * @returns {undefined}
         */
        function myHoistedFunctionDeclaration () {

        }
    });
});
