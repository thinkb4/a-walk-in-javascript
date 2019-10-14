
describe('DAY 9: Callback', () => {

    it(`(Synchronous callback)
        create a function named caller
            deduce the rest of the implementation reading the 2 expects`, () => {
        let callback = jest.fn();
        let callbackArgument = Symbol('callbackArgument');

        /**
         * 
         * @param {function} callback 
         * @returns {undefined}
         */
        let caller = () => {};

        let result = caller(callback);

        expect(callback).toBeCalledWith(callbackArgument);
        expect(result).toBe(callback);
    });

    it(`(Asynchronous callback)
        change the function "caller"
            deduce the implementation reading the 2 expects`, done => {

        let callback = jest.fn();
        let callbackArgument = Symbol('callbackArgument');

        // @see https://jestjs.io/docs/en/asynchronous
        let caller = () => {};

        setTimeout(() => expect(callback).toBeCalledWith(callbackArgument), 1000);

        setTimeout(() => caller(callback), 50);

    }, 2000);
});
