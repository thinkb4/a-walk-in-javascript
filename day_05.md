# [A walk in JavaScript](/README.md)

## DAY 5

- Control Structures
  - <https://en.wikibooks.org/wiki/JavaScript/Control_structures>
  - <https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-statements-and-declarations>
  - .. good practices
- Iteration Statements
  - <https://www.ecma-international.org/ecma-262/6.0/#sec-iteration-statements>
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for> and others
  - Introduce **iterable** concept, Iteration protocols
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols>
  - .. good practices

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
- produce a result ( which might or might not change the state depending on the executed operations)

Although `function`construct, and asycronous routines like `async/await`, `promise` and timers like `setTimeout` are ways of making decisions and changing the state of a the program, they're not strictly considered control structures. That said, they're so important to know that we're going to see them in the next days.

Note that some languages require a final keyword whilst JavaScript (and others) doesn't. ( [See here](https://en.wikipedia.org/wiki/Control_flow#Control_structures_in_practice) )

Also interesting to note that "Control Structures" or "control Flow" is not part of the organization of the ECMAScript standard, it rather organize them in terms of `statements` which make total sense, as it's the spec of the language and not a programming manual.

Let's start with organizing them:

### Branching

Take one or another direction depending on a choice

- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [short-circuit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Short-Circuit_Evaluation) ( although it's an expression, it really worth it to mention here )

### Grouping/ lexical scope delimiting
 *Note: JavaScript prior to ECMAScript2015 (6th edition) does not have block scope.*
- [Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
- [Empty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty)

### Exception handling
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### Iteration

- [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [for await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) *We won't see this one yet* ;)
- [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
