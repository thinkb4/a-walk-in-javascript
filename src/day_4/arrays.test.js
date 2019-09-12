/* eslint-env node, mocha, jest */

describe('DAY 4: Test Arrays', () => {

    it('Array to be instance of Array', () => {
        let array = [];
        expect(array).toBeInstanceOf(Array);
    });

    it('Array to be instance of Object', () => {
        let array = [];
        expect(array).toBeInstanceOf(Object);
    });

    it('Mutate Array length to be 4', () => {
        let array = [];
        // use a mutator method to add elements
        expect(array.length).toBe(4);
    });

    it('Mutate Array length to be 5', () => {
        let array = [42, 42, 42, 42, 42, 42];
        // use a mutator method to remove elements
        expect(array.length).toBe(5);
    });

});
