describe('DAY 5: Test Exception Handling', () => {

    it('throw explicitly an error and on catch define a as true', () => {
        let a;

        expect(a).toBe(true);

    });

    it('throw explicitly an error and assign the error to a, make the verification of the message', () => {
        let a;

        expect(a.toString()).toBe(`Error: I'm an error`);

    });

    it('throw explicitly an error and assign the error to a, make the verification of type', () => {
        let a;

        expect(a).toBeInstanceOf(Error);

    });
});
