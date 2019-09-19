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
  - ..
  - ..
  - .. good practices

## `this` Keyword

Over and over again I see engineers struggling with `this` topic; is so weird!! Long ago I found myself in the same situation, like, being writing code for many years and still ... never took the time to really understand `this` when `this` is one of the most important and powerful features in JavaScript!
Engineers we feel so frustrated about `this` that there's even a joke for `this`!

> JavaScript makes me want to flip the table and say "F*** this shit", but I can never be sure what **`this`** refers to.

The good things came when I took the responsibility of `this` and accepted the guilt was entirely mine.

Why this intro? because there are tons of articles regarding `this` but everything about `this` was written by **Kyle Simpson** who dedicated a whole book for `this` topic , so we're gonna read and study it until we breath `this`.

### Resolving `this`

Let's take a look a the following chapters of **You Don't Know JS: this & Object Prototypes - 1st Edition**

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

Now we've learned that `this` has specific rules and is resolved at run-time, and we saw that the `function` prototype has 3 methods to explicitly define where to point when `this` needs to be resolved during it's execution.

- [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

Now, there's a catch!!! it seems that depending on a thing called **mode** that depending on of it's [strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) or [non-strict](https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode) (a.k.a. Sloppy) it'll alter the semantics and behavior of many things including `this`.

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
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

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
    - Declaring twice the same name for a property name in an object literal `{a: 1, b: 3, a: 7}` This is no longer the case in ECMAScript 2015 (bug 1041128).
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

One of the most expected and misused features of ES6 is the Arrow Function. Undoubtedly powerful it might also derive in a headache inf you don't really know how they work and which are the difference between the full body notation and the arrow notation.

Let's take a look at [YDKJS - ES6 & Beyond - chapter 2](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#arrow-functions)

---

### Preliminary Practice

Now let's have some time to practice. Here a list of resources we can use:

- A
- B
- C

## Exercises

Let's open our test files:

- [this](/src/day_07/this.test.js)
- [strict mode](/src/day_07/strictMode.test.js)
- [arrow functions](/src/day_07/arrowFunctions.test.js)
- [generators](/src/day_07/generators.test.js)

Now open your terminal.

1. Make sure you're at the project location
2. If you didn't install all the packages yet then run `npm i` for a fresh dependency install, or `npm ci` for an installation based on the lock file.
3. Type `npm run test:watch`, this will start running your tests every time you make a change.

**Our task is to make ALL our DAY 7 tests pass ;)**
