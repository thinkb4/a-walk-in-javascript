
describe('DAY 5: Test Branching - if...else', () => {

    it('b to be true if a is truthy', () => {
        let a;
        let b;

        if (a) {
            //
        } else {
            //
        }

        expect(b).toBe(true);

    });

    it('b to be false if a is truthy', () => {
        let a;
        let b;

        if (a) {
            //
        } else {
            //
        }

        expect(b).toBe(false);

    });

    it('b to be 1 if a is truthy ( use postfix unary operator )', () => {
        let a;
        let b = 0;

        if (a) {
            //
        } else {
            //
        }
        // are prefix and postfix interchangeable here?
        expect(b).toBe(1);

    });

    it('b to be -1 if a is truthy ( use prefix unary operator )', () => {
        let a;
        let b = 0;

        if (a) {
            //
        } else {
            //
        }
        // are prefix and postfix interchangeable here?
        expect(b).toBe(-1);

    });

});

describe('DAY 5: Test Branching - switch/break', () => {

    it('found to be true when number 7 is the first item of array', () => {
        let array = [];
        let found = false;

        switch (array.indexOf(7)) {
            case -1:
                break;
            case 0:
                break;
            case 1:
                break;
            default:
                break;
        }

        expect(found).toBe(true);

    });

    it('found to be true when number 7 is not an item of array', () => {
        let array = [];
        let found = false;

        switch (array.indexOf(7)) {
            case -1:
                break;
            case 0:
                break;
            case 1:
                break;
            default:
                break;
        }

        expect(found).toBe(true);

    });

    it('found to be true when number 7 is at index 4 of array', () => {
        let array = [];
        let found = false;

        switch (array.indexOf(7)) {
            case -1:
                break;
            case 0:
                break;
            case 1:
                break;
            default:
                found = true;
                break;
        }

        expect(found).toBe(true);

    });

    it('found to be true when number 7 is at index 2 or 3 or 4 of array ( wanna try Fallthrough? )', () => {
        let array = [];
        let found = false;

        switch (array.indexOf(7)) {
            case -1:
                break;
            case 0:
                break;
            case 1:
                break;
            default:
                found = true;
                break;
        }

        expect(found).toBe(true);

    });

});

describe('DAY 5: Test Branching - short circuit', () => {

    it('c to be "hell yeah" using logical AND to evaluate a AND b, AND the value assigned to c', () => {
        let a;
        let b;
        let c = a && b && 'hell yeah';

        expect(c).toBe('hell yeah');

    });

    it('c to be "hell yeah" using logical OR to evaluate a OR b, AND the value assigned to c ( find the error and fix it )', () => {
        let a = 1;
        let b;
        let c = a || b && 'hell yeah';

        expect(c).toBe('hell yeah');

    });

    it('c to be true IF a AND b are numbers and > than 42', () => {
        // read the test spec carefully before start coding ;)
        let a;
        let b;
        let c = false;

        expect(c).toBe(true);

    });
});

describe('DAY 5: Test Branching - conditional operator ( ternary )', () => {

    it('c to be true IF a AND b are numbers and > than 42, else it should be false', () => {

        let a = null;
        let b = null;
        let c = null; // use ternary operator during assignment

        expect(c).toBe(true);

        a = null;
        b = null;
        c = null; // use ternary operator during assignment

        expect(c.toString()).toBe('Error: Not valid values for a and b');

    });

    it(`if speed is faster than 140, traffic ticket should be 8000, 
        else if, it's faster than 130, traffic ticket should be 3000
        else, traffic ticket should be 0`, () => {

        let speed;
        let trafficTicket; // use ternary operator during assignment

        expect(trafficTicket).toBe(8000);

        // change the values so the test may pass ( use ternary operator for trafficTicket )

        expect(trafficTicket).toBe(3000);

        // change the values so the test may pass ( use ternary operator for trafficTicket )

        expect(trafficTicket).toBe(0);

        /**
         * it seems we had to do some repetitive work here
         * any clue about how to avoid it?
         */
    });
});
