# [A walk in JavaScript](/README.md)

## DAY 8

- Classes
  - General definition
  - Syntax
    - `class` declaration statement
    - `class` expression
    - Class body and method definitions
  - ES6 Classes in depth
- OOP vs Functional
  - General definitions
  - Some essential differences
  - Examples
- Exercises

## Classes

### General definition

Let's start from the definition:

> JavaScript classes, introduced in ECMAScript 2015, are primarily **syntactical sugar** over JavaScript's existing **prototype-based** inheritance. The class **syntax does not introduce a new object-oriented inheritance model** to JavaScript.
>
> Source: [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

(－‸ლ) ok, so, the name is  `class` but it seems they're not classes. Let's continue.

> Classes are in fact "special [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)", and just as you can define [function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) and [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), the class syntax has two components: [class expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class) and [class declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class).
>
> Source: [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

(－‸ლ) (－‸ლ) now I'm confused ...so ... they're not  [classes](https://en.wikipedia.org/wiki/Class_(computer_programming)) so technically it's NOT a [class-based](https://en.wikipedia.org/wiki/Class-based_programming) language BUT you CAN do [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming)  ... so what in the world are they and what's the use?

Please don't give up. Despite the "unhappy" and misleading naming, they are a very useful and powerful abstraction around repetitive and error prone routines to create `prototype` based inheritance structures.

This time, ECMAScript international isn't very friendly with this:

- [Class Definitions](https://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions)
- [Functions and Classes](https://www.ecma-international.org/ecma-262/6.0/#sec-functions-and-classes)
- [MakeClassConstructor](https://www.ecma-international.org/ecma-262/6.0/#sec-makeclassconstructor)

So let's borrow some info from MDN.

### Syntax

#### `class` declaration statement

> The class body of a class declaration is executed in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). The constructor property is optional.
>
> Class declarations are not hoisted (unlike [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)).
>
> Source: [MDN - class declaration statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)

```javascript

class name [extends] {
  // class body
}
```

#### `class` expression

> The class expression is one way to define a class in ECMAScript 2015. Similar to [function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function), class expressions can be named or unnamed. If named, the name of the class is local to the class body only. JavaScript classes use prototype-based inheritance.
>
> Source: [MDN - class expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)

```javascript
var MyClass = class [className] [extends] {
  // class body
};
```

#### Class body and method definitions

> The body of a class is the part that is in curly brackets {}. This is where you define class members, such as methods or constructor.
>
> Let's see more at [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### ES6 Classes in depth

So far we've had a reasonable amount of information to shallowly understand JavaScript Classes, but I wanna push you a little further.

Again I'll ask Kyle Simpson's book to help me. Please go to [YDKJS: this & Object Prototypes - Appendix A: ES6 class](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/apA.md)

At this point we should be wise enough to start with the next step.

## OOP vs Functional programming

First of all I'd love to de-mystify something, there's not such a thing like a better paradigm. Both are powerful and both have their pros/cons depending on where and how they're used. Like a hammer and a screw-driver they're just tools, not more nor less. And they're incredible. Learn them, study them so you can make a better use of your creativity and your resources.

### General definitions

#### Functional Programming

> In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm in that programming is done with expressions or declarations instead of statements. In functional code, the output value of a function depends only on its arguments, so calling a function with the same value for an argument always produces the same result. This is in contrast to imperative programming where, in addition to a function's arguments, global program state can affect a function's resulting value. Eliminating side effects, that is, changes in state that do not depend on the function inputs, can make understanding a program easier, which is one of the key motivations for the development of functional programming.
>
> Source: [Wikipedia - Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)

#### Object-oriented programming (OOP)

> Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). A feature of objects is an object's procedures that can access and often modify the data fields of the object with which they are associated (objects have a notion of "this" or "self"). In OOP, computer programs are designed by making them out of objects that interact with one another. OOP languages are diverse, but the most popular ones are class-based, meaning that objects are instances of classes, which also determine their types.
>
> Source: [Wikipedia - Object-oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming)

### Some essential differences

#### Functional

- [High Order Functions (HOF)](https://en.wikipedia.org/wiki/Higher-order_function)
- [Pure functions](https://en.wikipedia.org/wiki/Pure_function)
- [Strict](https://en.wikipedia.org/wiki/Eager_evaluation) and [Lazy Evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation)
- [Referential Transparency](https://en.wikipedia.org/wiki/Referential_transparency)
- [Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)) over [iteration](https://en.wikipedia.org/wiki/Iteration#Computing)
- [Declarative](https://en.wikipedia.org/wiki/Declarative_programming) over [imperative](https://en.wikipedia.org/wiki/Imperative_programming) programming paradigm
- [Immutable](https://en.wikipedia.org/wiki/Immutable_object) over mutable data structures
- [Stateless](https://en.wikipedia.org/wiki/State_(computer_science)#Program_state)
- [Deterministic](https://en.wikipedia.org/wiki/Deterministic_algorithm)

#### OOP

- [Abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)#Abstraction_in_object_oriented_programming)
- [Inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming))
- [Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_(computer_science))
- [Encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming))
- Iteration over recursion
- Imperative over declarative programming paradigm
- Mutable over immutable data structures
- [Stateful](https://en.wikipedia.org/wiki/State_(computer_science)#Program_state)
- [Nondeterministic](https://en.wikipedia.org/wiki/Nondeterministic_algorithm)

#### Examples

Let's see this oversimplified example and discuss it.

```javascript
/**
 * OOP
 */
class Plant {

    /**
     * @param {number} flowers
     */
    constructor (flowers = 0) { this.flowers = flowers; }

    /**
     * @returns {number}
     */
    addFlower () { return ++this.flowers; }

}

let myPlants = [
    new Plant(1),
    new Plant(),
    new Plant(7),
    new Plant(9)
];

for (let plant of myPlants) {
    plant.addFlower();
}

```

```javascript
/// FP
let myPlants = [ 1, 0, 7, 9 ];

let plantsWithMoreFlowers = myPlants.map(flower => ++flower);
```

## Exercises

Let's open our test files:

- [Classes](/src/day_08/classes.test.js)

Now open your terminal.

1. Make sure you're at the project location
2. If you didn't install all the packages yet the run `npm i` for a fresh dependency install, or `npm ci` for an installation based on the lock file.
3. Type `npm run test:watch`, this will start running your tests every time you make a change.

**Our task is to make ALL our DAY 8 tests pass ;)**

***
[Go back to DAY 7](/day_07.md) or [Go next to DAY 9](/day_09.md)
***
[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-8)