# [A walk in JavaScript](/README.md)

## DAY 7

- `this` Keyword
  - Introduction
  - Resolving `this`
  - Explicitly binding `this` through prototype methods
    - `Function.prototype.bind()`
    - `Function.prototype.apply()`
    - `Function.prototype.call()`
- Strict mode
  - What happens on strict mode?
  - Semantic Differences
- Arrow Functions
- Generators
- Exercises

## `this` Keyword

Over and over again I see engineers struggling with `this` topic; it's so weird!! Long ago I found myself in the same situation, like, writing code for many years and still ... never took the time to really understand `this` when `this` is one of the most important and powerful features in JavaScript!
As engineers, we feel so frustrated about `this` that there's even a joke for `this`!

> JavaScript makes me want to flip the table and say "F*** this shit", but I can never be sure what **`this`** refers to.

Things got better when I took the responsibility of `this` and accepted that the blame was entirely mine.

Why this intro? because there are tons of articles regarding `this` but everything about `this` was written by **Kyle Simpson** who dedicated a whole book for `this` topic , so we're gonna read and study it until we breathe `this`.

### Resolving `this`

Let's take a look at the following chapters of **You Don't Know JS: this & Object Prototypes - 1st Edition**

- [Chapter 1: this Or That?](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch1.md)
- [Chapter 2: this All Makes Sense Now!](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md)
- [Chapter 5: Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md)
- [Chapter 6: Behavior Delegation](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch6.md)

Now let's see how ECMAScript specifies the mechanism to resolve `this`.

- [GetThisEnvironment ( )](https://www.ecma-international.org/ecma-262/6.0/#sec-getthisenvironment)
- [ResolveThisBinding ( )](https://www.ecma-international.org/ecma-262/6.0/#sec-resolvethisbinding)

In the other hand, MDN describes `this` on the Operators section

- [MDN - *this*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### Explicitly binding `this` through prototype methods

Now we've learned that `this` has specific rules and it's resolved at run-time, and we saw that the `function` prototype has 3 methods to explicitly define where to point when `this` needs to be resolved during it's execution.

- [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

Now, there's a catch!!! it seems that depending on a thing called **mode**, that depending on its [strictness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) or [non-strictness](https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode) (a.k.a. Sloppy) will alter the semantics and behavior of many things including `this`.

---

## Strict Mode

- [MDN - Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [MDN - Transitioning to Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
- [ECMAScript 5.1 - Strict Mode](http://www.ecma-international.org/ecma-262/5.1/#sec-10.1.1)
[ECMAScript 2015 - Strict Mode](http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code)
- [The ECMAScript 2016 change you probably don't know](https://humanwhocodes.com/blog/2016/10/the-ecmascript-2016-change-you-probably-dont-know/)
- [Speaking JavaScript - Chp.7 Strict Mode" - by Dr. Axel Rauschmayer](http://speakingjs.com/es5/ch07.html#strict_mode)

### What happens on strict mode?

#### TL;DR

1. Eliminates some JavaScript `silent errors` by changing them `to throw errors`.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not in strict mode.
3. Prohibits some syntax likely from be defined in future versions of ECMAScript.

### Semantic differences

- `this` resolution won't propagate to the global scope, thus for a strict mode function, the specified this is not boxed into an object, and if unspecified, this will be `undefined`
- arguments doesn't alias named function arguments
- `eval` doesn't create a new variable in the scope from which it was called, `eval` of strict mode code does not introduce new variables into the surrounding scope.

When adding `'use strict';` the following cases will throw an Error:

- SyntaxError
  - Octal syntax `var n = 023;`
  - `with` statement
  - Using delete on a variable name `delete myVariable`;
  - Using `eval` or `arguments` as variable or function argument name
  - Using one of the newly reserved keywords (in prevision for ECMAScript 2015):
    - `implements`,
    - `interface`,
    - `let`,
    - `package`,
    - `private`,
    - `protected`,
    - `public`,
    - `static`,
    - and `yield`
  - Escape characters are not allowed `var y = \010;`
  - Declaring function in blocks `if (a < b) { function f() {} }`
  - Obvious errors
    - Declaring the same name twice for a property name in an object literal `{a: 1, b: 3, a: 7}` This is no longer the case in ECMAScript 2015 (bug 1041128).
    - Declaring two function parameters with the same name function `f(a, b, b) {}`
- TypeError
  - Writing to a get-only property is not allowed
  - Writing to a read-only property is not allowed
  - Deleting an undeletable property is not allowed `delete Object.prototype`
  - Setting properties on primitive values `false.true = '';` , `(14).sailing = 'home';` , `'with'.you = 'far away';`
- Runtime errors
  - Setting a value to an undeclared variable
  - Trying to delete a non-configurable property
  - Poisoned arguments and function properties, e.g. accessing `arguments.callee`, `arguments.caller`, `anyFunction.caller`, or `anyFunction.arguments`
- ReferenceError
  - Using a variable, without declaring it

---

## Arrow Functions

> An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.
>
> Source: [MDN - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Syntax

```javascript
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }

// Parenthesize the body of a function to return an object literal expression:
params => ({foo: bar})

// Rest parameters and default parameters are supported
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => {
statements }

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6

```

One of the most expected and misused features of ES6 is the Arrow Function. Undoubtedly powerful, it might also derive in a headache if you don't really know how they work and what the differences are between the full body notation and the arrow notation.

Let's take a look at [YDKJS - ES6 & Beyond - chapter 2](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#arrow-functions)

---

## Generators

So far we've seen (except for the iterators) only **[run-to-completion](https://en.wikipedia.org/wiki/Run_to_completion_scheduling)** examples of code. It means, "the execution won't stop until it's done or fails".
What if I tell you there's a feature that lets you define a function capable of being paused midway and resumed later?

Together with [`iterators`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) ES6 introduced something called `generators`.

> The Generator object is returned by a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) and it conforms to both the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) and the [iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol).

There are 2 ways to create a [generator object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

- [function* expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

  ```javascript
  function* name([param[, param[, ... param]]]) {
    statements
  }
  ```

- [GeneratorFunction constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)

  ```javascript
  let GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
  let myGenerator = new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody)
  ```

> **Note** that GeneratorFunction is **not a global object**.
>
> `generator` function objects created with the `GeneratorFunction` constructor are parsed when the function is created. This is less efficient than declaring a generator function with a `function* expression` and calling it within your code, because such functions are parsed with the rest of the code.
>
> Source: [MDN GeneratorFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)

Since this is a particularly complex topic, with several nuances, let's try to understand them through examples:

### Example of execution sequence

```javascript
/**
 *
 * @param {number} initialValue
 * @returns {Object} Generator
 */
function* bottlesOfBeer (initialValue) {
  let bob = initialValue;
  let lastMessage = `No more bottles of beer on the wall, no more bottles of beer. 
Go to the store and buy some more, ${bob} bottles of beer on the wall.`;

  while (true) {
    console.log(`${bob} bottles of beer on the wall, ${bob} bottles of beer.`);

    yield bob--;

    console.log(`Take one down and pass it around, ${bob} bottles of beer on the wall.`);

    if (bob < 1) {
        bob = initialValue;
        console.log(lastMessage);
    }
  }
}

let bob = bottlesOfBeer(100);

bob.next();
// log -> 5 bottles of beer on the wall, 5 bottles of beer.
// statement completion value -> {value: 5, done: false}

bob.next();
// log -> Take one down and pass it around, 4 bottles of beer on the wall.
//        4 bottles of beer on the wall, 4 bottles of beer.
// statement completion value -> {value: 4, done: false}

// ... 3 more calls

bob.next();
// log -> Take one down and pass it around, 0 bottles of beer on the wall.
//        No more bottles of beer on the wall, no more bottles of beer. 
//        Go to the store and buy some more, 5 bottles of beer on the wall.
//        5 bottles of beer on the wall, 5 bottles of beer.
// statement completion value -> {value: 5, done: false}

// guess what happens now?

```

### Passing values through `next`

```javascript
/**
 *
 * @returns {Object} Generator
 */
function* passingValToNext () {
  let val = 10;

  while (true) {
    console.log(`UP val=${val}`);

    val = yield val + 10;

    console.log(`DOWN val=${val}`);
  }
}

let pvtn = passingValToNext();
// statement completion value -> passingValToNext {<suspended>}

pvtn.next(2);
// log ->  UP val=10
// statement completion value -> {value: 20, done: false}

pvtn.next(7);
// log ->  DOWN val=7
// log ->  UP val=7
// statement completion value -> {value: 17, done: false}

// WAIT! WHAT??!!!!
// how does it work?

```

### Sample combining initial value and passing value to next

```javascript
/**
 *
 * @param {Number} expectedTotal
 * @returns {Object} Generator
 */
function* calculateDownloadProgress (expectedTotal) {
  let totalDownloaded = 0;
  let newItems = 0;

  while (true) {
    totalDownloaded += newItems || 0; // lazy verification for the value passed by `next`

    let percent = ((totalDownloaded / expectedTotal) * 100).toFixed(2);

    newItems = yield `${percent}%`;
  }
}

let progress = calculateDownloadProgress(1024);
// statement completion value -> undefined
progress.next()
// statement completion value -> {value: "0.00%", done: false}
progress.next(15)
// statement completion value -> {value: "1.46%", done: false}
progress.next(500)
// statement completion value -> {value: "50.29%", done: false}
```

### DIY

```javascript
/**
 *
 * @returns {Object} Generator
 */
function* spinGen() {
  while(true){
    yield* ['\\', '|', '/', '--'];
  }
}

// now you add the code to see the output
```

Let's take some time to read and discuss:

- [ECMAScript Generator Function](https://www.ecma-international.org/ecma-262/6.0/#sec-generatorfunction)
- [YDKJS - ES6 & Beyond - CH3 - Generators](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#generators) - by Kyle Simpson
- [The Basics Of ES6 Generators](https://davidwalsh.name/es6-generators) - By Kyle Simpson
- [2ality - ES6 generators in depth](https://2ality.com/2015/03/es6-generators.html) -  by Dr. Axel Rauschmayer

---

## Exercises

Let's open our test files:

- [this](/src/day_07/this.test.js)
- [arrow functions](/src/day_07/arrowFunctions.test.js)
- [generators](/src/day_07/generators.test.js)

Now open your terminal.

1. Make sure you're at the project location
2. If you didn't install all the packages yet then run `npm i` for a fresh dependency install, or `npm ci` for an installation based on the lock file.
3. Type `npm run test:watch`, this will start running your tests every time you make a change.

**Our task is to make ALL our DAY 7 tests pass ;)**

***
[Go back to DAY 6](/day_06.md) or [Go next to DAY 8](/day_08.md)
***
[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-7)