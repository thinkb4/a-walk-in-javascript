# [A walk in JavaScript](/README.md)

## DAY 5

- Control Structures
  - General definition
  - Branching
  - Grouping
  - Exception handling
  - Iteration
  - Arbitrary Jumps
  - The Iterable and the Iterator Protocol
  - Preliminary Practice
  - Exercises

## Control Structures

As we saw in [DAY 1](/day_01.md), JavaScript is as multi-paradigm language. One of this paradigms is the **imperative** one which requires the program to instruct the machine **how** to change its state, and the **order** in which individual statements and instructions are **executed or evaluated**.

There are several definitions out in the wild and they will vary depending on the context and the language. One I found very simple and educative is the following:

> A control structure is a block of programming that analyses variables and chooses a direction in which to go based on given parameters. The term flow control details the direction the program takes (which way program control "flows"). Hence it is the basic decision-making process in computing; It is a prediction.
>
> Source: [Wikiversity](https://en.wikiversity.org/wiki/Control_structures#Flow_Control_Overview)

Also there we'll find a great enlightment of the whole picture of a control statement.

> Those **initial conditions and parameters** are called **preconditions**. Preconditions are the state of variables before entering a control structure. Based on those preconditions, the computer runs an algorithm (the control structure) to determine what to do. The **result** is called a **post condition**. Post conditions are the state of variables after the algorithm is run.
>
> Source: [Wikiversity](https://en.wikiversity.org/wiki/Control_structures#Flow_Control_Overview)

Now it's clear that a control structure will:

- analyze the current state of the program
- operate on that state
- produce a result (which might or might not change the state depending on the executed operations)

Although `function` construct, and asynchronous routines like `async/await`, `promise` and timers like `setTimeout` are ways of making decisions and changing the state of a the program, they're not strictly considered control structures. That said, they're so important to know that we're going to see them in the next days.

Note that some languages require a final keyword whilst JavaScript (and others) don't. ( [See here](https://en.wikipedia.org/wiki/Control_flow#Control_structures_in_practice) )

It's also interesting to note that "Control Structures" or "control Flow" is not part of the organization of the ECMAScript standard, it rather organizes them in terms of `statements` which make total sense, as it's the spec of the language and not a programming manual.

Let's start with organizing them:

### Branching

> Take one or another direction depending on a choice

- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [short-circuit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Short-Circuit_Evaluation) ( although it's an expression, it really worth it to mention here )
- [conditional-operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) ( a.k.a. ternary operator )

### [Grouping](https://www.ecma-international.org/ecma-262/6.0/#sec-block) / lexical scope delimiting

 > *Remember JavaScript prior to ECMAScript2015 (ES6) doesn't have block scope.*

- [Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
- [Empty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty)

### Exception handling

- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### [Iteration](https://www.ecma-international.org/ecma-262/6.0/#sec-iteration-statements)

- [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [for await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) *We won't see this one yet* ;)
- [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)

### Arbitrary jumps

- [labels](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#labels) *yup, js has labels (－‸ლ)*

### The Iterable and the Iterator Protocol

Until ES6, all iteration adhered to the [run-to-completion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Run-to-completion) model where essentially there was no mechanism to pause/resume a loop. You could interrupt it or wait until the iteration finished, but no granular control over the iteration steps pace was possible. In order to evolve, many of the features introduced in ES6 where protocols, and some of the existing features started using them under the hood to be both backwards compatible and scalable for the future.

Here is how ECMAScript spec defines them:

- [[ @@iterator ] ( )](https://www.ecma-international.org/ecma-262/6.0/#sec-@@iterator)
- [Common Iteration Interfaces](https://www.ecma-international.org/ecma-262/6.0/#sec-common-iteration-interfaces)
- [Operations on Iterator Objects](https://www.ecma-international.org/ecma-262/6.0/#sec-operations-on-iterator-objects)

But they might be a little harsh at this moment, why don't we take a look at MDN for a friendlier description?

#### Iterable Protocol

> The **iterable protocol** allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for..of construct. Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.
>
> In order to be **iterable**, an object must implement the **@@iterator** method, meaning that the object (or one of the objects up its prototype chain) must have a property with a **@@iterator** key which is available via constant `Symbol.iterator`
>
> Source: [MDN - The iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)

#### Iterator Protocol

> The **iterator protocol** defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.
>
> An object is an iterator when it implements a `next()` method with the following semantics:
>
> **Property:**
> `next`
>
> **Value**
> A zero arguments function that returns an object with at least the following two properties:
>
> - `done` (boolean)
>   - Has the value `true` if the iterator is past the end of the iterated sequence. In this case value optionally specifies the return `value` of the iterator.
>   - Has the value `false` if the iterator was able to produce the next value in the sequence. This is equivalent of not specifying the `done` property altogether.
> - `value` - any JavaScript value returned by the iterator. Can be omitted when `done` is `true`.
>
> The `next` method always has to return an object with appropriate properties including `done` and `value`. If a non-object value gets returned (such as `false` or `undefined`), a TypeError ("iterator.next() returned a non-object value") will be thrown.
>
> Source: [MDN - The iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol)

Essentially this protocols defines and interface to iterate in a consistent way across implementations opening the door for you to define your own iterables taking control of the iteration steps in a super granular way.

Also a big section of the Chapter 3 of Your Don't Know Js - ES6 & Beyond is dedicated to iterators. Let's read how it starts:

> An iterator is a structured pattern for pulling information from a source in one-at-a-time fashion. This pattern has been around programming for a long time. And to be sure, JS developers have been ad hoc designing and implementing iterators in JS programs since before anyone can remember, so it's not at all a new topic.
>
> What ES6 has done is introduce an implicit standardized interface for iterators. Many of the built-in data structures in JavaScript will now expose an iterator implementing this standard. And you can also construct your own iterators adhering to the same standard, for maximal interoperability.
>
> Source: [YDKJS - ES6 & Beyond - Ch 3](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#iterators)

We can find many iterable examples [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Examples_using_the_iteration_protocols).

Another interesting reading is "[A Simple Guide to ES6 Iterators in JavaScript with Examples"](https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e) by "[Brandon Morelli](https://codeburst.io/@bmorelli25)"

You might ask "**what the hell are those @@**?"
They're called "Well Known Symbols" and you can read more here:

- [YDKJS - ES6 & Beyond - Ch 7](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch7.md#well-known-symbols)
- [MDN - well-known symbols](https://developer.mozilla.org/en-US/docs/Glossary/Symbol#Well-known_symbols)
- [ECMAScript 2015 - Well Known Symbols](https://www.ecma-international.org/ecma-262/6.0/#sec-well-known-symbols)

## Preliminary Practice

Now let's have some time to practice with some available resources online.

Here a list of resources we can use:

- [W3resources conditional statements and loops exercises with solution](https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php)
- [EXL Skills - Conditional statements](https://exlskills.com/learn-en/courses/javascript-fundamentals-basics_javascript/conditional-statements-zgrXFcSqdfIF/the-if-statements-YcHrGQKxvTOI/if-statement-gSYnhCNQGNNF)
- [EXL Skills - Loops](https://exlskills.com/learn-en/courses/javascript-fundamentals-basics_javascript/loops-AXTrhsNFlqOT/basic-loops-RcLAUSSMqnla/what-is-a-loop-ZHkzGOcTvbEE)

## Exercises

Let's open our test files:

- [Branching](/src/day_05/branching.test.js)
- [Grouping](/src/day_05/grouping.test.js)
- [Exception handling](/src/day_05/exceptionHandling.test.js)
- [Iteration](/src/day_05/iteration.test.js)
- [Iterable and Iterators](/src/day_05/iterableAndIterators.test.js)

Now open your terminal.

1. Make sure you're at the project location
2. If you didn't install all the packages yet then run `npm i` for a fresh dependency install, or `npm ci` for an installation based on the lock file.
3. Type `npm run test:watch`, this will start running your tests every time you make a change.

**Our task is to make ALL our DAY 5 tests pass ;)**

***
[Go back to DAY 4](/day_04.md) or [Go next to DAY 6](/day_06.md)
***
[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-5)