
describe('DAY 8: classes', () => {

    it(`complete the Dog class constructor code to fulfill the test conditions`, () => {

        /**
         * 
         */
        class Dog {

            /**
             * 
             * @returns {Dog}
             */
            constructor () {
                this.favoriteThing = `food`;
            }

        }

        let myDog1 = new Dog('fido');

        expect(myDog1.name).toBe('fido');
        expect(myDog1.favoriteThing).toBe(`food`);

        let myDog2 = new Dog();

        expect(myDog2.name).toBe(`lonely dog without a name`);
        expect(myDog2.favoriteThing).toBe(`food`);

    });

    it(`Dog should extend from Mammal`, () => {

        /**
         * 
         */
        class Mammal {

            /**
             * @returns { Mammal }
             */
            constructor () {
                this.hasFur = true;
                this.isWarmBlooded = true;
            }
        }

        /**
         * @extends Mammal
         */
        class Dog {

            /**
             * 
             * @returns {Dog}
             */
            constructor () {
                this.favoriteThing = `food`;
            }

        }

        let myDog = new Dog();

        expect(myDog).toBeInstanceOf(Dog);
        expect(myDog).toBeInstanceOf(Mammal);
        expect(myDog.hasFur).toBe(true);
        expect(myDog.favoriteThing).toBe(`food`);

    });

    it(`Fix the methods of Dog class so that they correctly belong to the "class" or to the "instance"`, () => {

        /**
         * 
         */
        class Dog {

            /**
             * @returns {Dog}
             */
            constructor () {
                this.favoriteThing = `food`;
            }

            /**
             * @returns {string}
             */
            static jump () {
                return `jumping`;
            }

            /**
             * @returns {string}
             */
            bark () {
                return `barking`;
            }

        }

        let myDog = new Dog();

        expect(myDog.jump()).toBe('jumping');
        expect(() => myDog.bark()).toThrow('myDog.bark is not a function');
        expect(Dog.bark()).toBe('barking');

    });

    it(`use the following code as a starting point
        change favoriteThing into a "private" property
        add the necessary setter and getter
        `, () => {

        /**
         * 
         */
        class Dog {

            /**
             * @returns {Dog}
             */
            constructor () {
                this.favoriteThing = `food`;
                this[Symbol(`dogName`)] = '';
            }

            /**
             * @param {string} name
             */
            set name (name) {
                let dogNameSymbol = Object.getOwnPropertySymbols(this)[0];
                this[dogNameSymbol] = name;
            }

            /**
             * @returns {string}
             */
            get name () {
                let dogNameSymbol = Object.getOwnPropertySymbols(this)[0];
                return this[dogNameSymbol];
            }

        }

        let myDog = new Dog();
        myDog.name = `Copernicus`;
        myDog.favoriteThing = `eat Aristarchus' food`;

        expect(myDog.name).toBe('Copernicus');
        expect(myDog.favoriteThing).toBe(`eat Aristarchus' food`);
        expect(Object.getOwnPropertyNames(myDog)).toEqual([]);

    });
});
