
describe('DAY 9: Promises', () => {

    it(`validString function should return a Promise
        the promise should:
            resolve with the input value if it's a string
            reject with an instance of MySampleTypeError if it's not
            the error message should be a "Template literal" (see the catch block for a hint)`, () => {

        /**
         * 
         * @param {*} input
         * @returns {Promise}
         */
        function validateString (input) {
            return new Promise((resolve, reject) => {
                
            });
        }

        let input1 = `I'm a a string`;
        let input2 = 5;

        /**
         * this test is not quite good
         * we might have false positives
         * ? can you tell why?
         */
        return validateString(input1).then(resolution => {
            expect(resolution).toBe(`I'm a a string`);
        }).then(() => {
            return validateString(input2);
        }).catch((error) => {
            expect(error).toBeInstanceOf(TypeError);
            expect(error.message).toBe(`${input2} is not a string`);
        });
    });

    it(`validString function should exactly as the previous test
        stringToUpper function should return a Promise
            and will try to resolve the string to uppercase
                or catch the error and reject it
       `, () => {

        /**
         * 
         * @param {*} input
         * @returns {Promise}
         */
        function validateString (input) {
            return new Promise((resolve, reject) => {
                resolve(input);
            });
        }

        /**
         * 
         * @param {*} input
         * @returns {Promise}
         */
        function stringToUpper (input) {
            return new Promise((resolve, reject) => {
                resolve('change me');
            });
        }

        let input = 'oo';

        /**
         * this tests has a redundant validation
         * ? can you tell why is that?
         */
        return validateString(input).then(resolution => {
            return stringToUpper(resolution);
        }).then(resolution => {
            expect(resolution).toBe(input.toUpperCase());
        });
    });

});
