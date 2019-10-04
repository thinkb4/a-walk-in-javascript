describe('DAY 6: Test closure', () => {

    it(`function a to change variable b through a closure (side effect)`, () => {

        /**
         * 
         * @returns {undefined}
         */
        function a () {
            // add the code to operate with the free variable
            b++;
        }

        let b = 5;

        // add the code to execute the operation on the free variable inside function a

        expect(b).toBe(6);
    });

    it(`function c to change variable a and b through a closure (side effect)`, () => {

        let a = 9;
        let b = function () {};
        /**
         * 
         * @returns {undefined}
         */
        function c () {
            a = function () {};
            b = [];
        }

        expect(typeof a).toBe('number');
        expect(b).toBeInstanceOf(Function);

        // add the missing part of the code to complete the test

        expect(typeof a).toBe('function');
        expect(b).toBeInstanceOf(Array);
    });

});
