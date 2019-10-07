
describe('DAY 7: this keyword', () => {

    it(`invoke a constructor function and assign the resulting object to "a"`, () => {

        /**
         * @returns {undefined|object}
         */
        function A () {

            this.b = function b () {
                return this.c;
            };

            this.c = [1, 2, 3, 4];
        }

        // complete the code to pass the test
        let a;

        expect(a.b()).toBe(a.c);
        expect(a).toBeInstanceOf(A);
    });

    it(`create a bound function to make b return a.c value`, () => {

        let a = {
            c: [1, 2, 3]
        };

        /**
         * @memberof a
         * @returns {array}
         */
        function b () {
            return this.c;
        }

        // complete the code to pass the test
        let w;

        expect(w).toBe(a.c);
    });

    it(`call function b with a as the belonging object
        and provide the required argument values to pass the test`, () => {

        let a = {
            c: [1, 2, 3]
        };

        /**
         * 
         * @param {number} x
         * @param {number} y
         * @memberof a
         * @returns {array}
         */
        function b (x, y) {
            this.x = x;
            this.y = y;
            return this.c;
        }

        // complete the code to pass the test
        let w;

        expect(w).toBe(a.c);
        expect(typeof a.x).toBe('number');
        expect(typeof a.y).toBe('number');
    });

    it(`apply a as this for b and pass the required arguments to pass the test`, () => {

        let a = {
            c: [1, 2, 3]
        };

        /**
         * 
         * @param {number} x
         * @param {number} y
         * @memberof a
         * @returns {array}
         */
        function b (x, y) {
            this.x = x;
            this.y = y;
            return this.c;
        }

        // complete the code to pass the test
        let w;

        expect(w).toBe(a.c);
        expect(typeof a.x).toBe('number');
        expect(typeof a.y).toBe('number');
    });

    it(`function b should resolve this to object a`, () => {

        /**
         * 
         * @memberof a
         * @returns {array}
         */
        function b () {
            return this.c;
        }

        let a = {
            // complete the object property to pass the test
            c: [1, 2, 3]
        };

        expect(a.b).toBe(b);
        expect(a.b()).toBe(a.c);

    });

    it(`lexical this
        can you fix it?`, () => {

        /**
         * @returns {undefined|object}
         */
        function A () {

            this.b = function () {
                // use lexical scope to fix this
                return function () {
                    return this.c;
                };

            };

            this.c = 'hi';
        }

        let a = new A();

        let d = {
            b: a.b,
            c: 'bye',
            e: a.b()
        };

        let f = a.b();

        expect(d.b()()).toBe(d.c);
        expect(d.e()).toBe(a.c);
        expect(f()).toBe(a.c);
    });
});
