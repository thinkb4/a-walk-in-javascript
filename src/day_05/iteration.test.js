describe('DAY 5: Test Iteration - While', () => {

    it(`(while loop)
        condition: should loop until a is less than 5
        body: post increment a on each iteration`, () => {
        let a = 0;

        expect(a).toBe(5);

    });

    it(`(while loop)
        condition: pre increment a 
        body: should break if a greater than 4`, () => {
        let a = 0;

        expect(a).toBe(5);

    });
});

describe('DAY 5: Test Iteration - for', () => {
    it(`(for loop)
        initialization: declare a to 0
        condition: keep looping whilst a is less than 5
        final-expression: post increment a
        body: operate with a and b to make b be 11 as final result`, () => {
        let a;
        let b = 1;

        expect(a).toBe(5);
        expect(b).toBe(11);

    });

    it(`(for loop)
        initialization: se a to 0
        condition: keep looping whilst a is less than 5
        final-expression: post increment a
        body: operate with a and b to make b a string equals to 01234`, () => {
        let b = '';

        expect(b).toBe('01234');

    });

});

describe('DAY 5: Test Iteration - for...in', () => {

    it(`(for..in loop)
        for every property in object
        multiply the property value per 2`, () => {

        let object = { prop1: 1, prop2: 2, prop3: 3 };

        expect(object.prop1).toBe(2);
        expect(object.prop2).toBe(4);
        expect(object.prop3).toBe(6);

    });

    it(`(for..in loop)
        for every property in object
        add the property name to the array`, () => {
        let array = [];
        let object = { prop1: 1, prop2: 2, prop3: 3 };

        expect(array.indexOf('prop1')).toBe(0);

    });
});

describe('DAY 5: Test Iteration - for...of', () => {

    it(`(for..of loop)
        for every char of string
        add it's uppercase version to string2`, () => {
        let string = 'hello';
        let string2 = '';

        expect(string2).toBe('HELLO');

    });
});
