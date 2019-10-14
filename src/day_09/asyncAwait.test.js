
describe('DAY 9: Async/await', () => {
    /**
     * @param {string} outcome resolve|reject
     * @returns {Promise}
     */
    function fetchData (outcome) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch (outcome) {
                    case 'resolve':
                        resolve('data retrieved');
                        break;
                    default:
                        reject(new Error('no data'));
                        break;
                }
            }, 50);
        });
    }

    // @see https://jestjs.io/docs/en/asynchronous for a hint
    it(`make an async test for fetchData to verify resolution`, () => {
        throw new Error('replace the test body');
    });

    // @see https://jestjs.io/docs/en/asynchronous for a hint
    it(`make an async test for fetchData to verify rejection`, () => {
        throw new Error('replace the test body');
    });
});
