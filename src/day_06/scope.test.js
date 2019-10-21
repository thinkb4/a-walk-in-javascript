
describe('DAY 6: Test Scope', () => {

    it(`n to be available outside of the block scope`, () => {

        {
            // change the declaration statement to accomplish the task
            let n = 5;
        }

        expect(n).toBe(5);
    });

    it(`outer n to be 5
        inner IIFE n var to be 4 (hint: add the missing code)`, () => {
        let n = 5;

        (function () {

            expect(n).toBe(4);

        }());

        expect(n).toBe(5);
    });

    it(`inner most IIFE to have access to the outer most n var (hint: change the expect statement)`, () => {
        let n = 5;

        (function () {

            (function () {

                (function () {

                    (function () {

                        (function () {

                            expect(n).not.toBe(5);

                        }());

                    }());

                }());

            }());

        }());

    });

});
