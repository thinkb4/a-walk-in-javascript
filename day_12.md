# [A walk in JavaScript](/README.md)

## DAY 12

- Destructuring
  - Syntax
  - Examples
  - Readings
- Advanced Function/code factorization
  - Currying
  - Partial application
  - First-class composition
  - Readings

## Destructuring

> The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
>
> Source [Wikipedia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Ok nice, but, what's that?

A better explanation is defined later on in that document

<div style="border: solid 1px transparent; padding:20px; border-left-width:5px; border-left-color:#ccc;">

The object and array literal expressions provide an easy way to create ad hoc packages of data.

```javascript
var x = [1, 2, 3, 4, 5];
```

The **destructuring assignment** uses similar syntax, but on the `left-hand side` of the assignment to define what values to **unpack** from the sourced variable.

```javascript
let x = [1, 2, 3, 4, 5];
let [y, z] = x;

console.log(y); // 1
console.log(z); // 2
```

Source [Wikipedia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
</div>

Now that's better, if we think in terms of unpacking it's much easier to understand.

But this is only the beginning, this new feature enables a lot of new patterns which were hard to write and maintain before ES6 or even impossible to write.

Object destructuring:

```javascript
let x = {a: 1, b:2};
let {a, b} = x;

console.log(a); // 1
console.log(b); // 2
```

Variable Swapping

```javascript
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

Default values

```javascript
let {a = 0, b = null} = someObject;
```

Even destructuring function parameters + adding default values

```javascript
/**
 *
 * @param {object} $0
 * @param {string} $0.a
 * @param {number} $0.b
 * @returns {String}
 */
function f ({ a = 'default string', b = 0 } = {}) {
    return `${a}, ${b}`;
}
```

And leveraging delayed evaluation you can make a destructured parameter to be mandatory

```javascript
/**
 *
 * @param {object} $0
 * @param {string} $0.a
 * @param {number} $0.b
 * @returns {String}
 */
function f ({
    a = (function(){ throw new Error('a is mandatory')}()),
    b = 0
  } = {}) {
    return `${a}, ${b}`;
}

f(); // will throw
f({a:'hi'}); // will return "hi, 0"
```

Let's take some time and go through the following documents:

- [MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [YDKJS: ES6 & Beyond : Syntax -> Destructuring](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#destructuring)
- [2ality: Destructuring and parameter handling in ECMAScript 6](https://2ality.com/2015/01/es6-destructuring.html)
- [David Walsh: Destructuring and Function Arguments](https://davidwalsh.name/destructuring-function-arguments)

## Advanced Function/code factorization

### Currying

> In mathematics and computer science, currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument. For example, a function that takes two arguments, one from X and one from Y, and produces outputs in Z, by currying is translated into a function that takes a single argument from X and produces as outputs functions from Y to Z. Currying is related to, but not the same as, partial application. [Wikipedia](https://en.wikipedia.org/wiki/Currying)

```javascript
/**
 * No curry for you
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x, y){
    return x + y;
}
add(3, 4); // > 7


/**
 * Add some spicy curry
 *
 * @param {number} x
 * @returns {function}
 */
function add_curry(x) { // :P
  return function(y) {
   return x + y;
  }
}
add_curry(3)(4); // 7

```

```javascript

const message = 'Today, [date], [user] says [salutation]';
const message2 = 'Hello [user] you have to say [salutation] before the end of [date]';
const date = new Date();
const user = { name: 'Javier', surname: 'Valderrama', nickName: 'jax' };
const salutation = 'hi';

/**
 * Not Curried
 *
 * @param {String} message
 * @param {Object} date
 * @param {Object} user
 * @param {String} salutation
 * @returns {String}
 */
function formatMessage (message, date, user, salutation) {

    return message.replace('[date]', date.toLocaleDateString())
        .replace('[user]', user.nickName.toUpperCase())
        .replace('[salutation]', salutation.replace(/hi/i, 'howdy'))

}

formatMessage(
    message,
    date,
    user,
    salutation
) // > "Today, 24/6/2019, JAX says howdy"

/**
 * Curried
 *
 * @param {String} salutation
 * @param {Object} user
 * @param {Object} date
 * @param {String} message
 *
 * @returns {Function|String}
 */
let formatMessageCurried = (salutation) => (user) => (date) => (message) => {
    return message.replace('[date]', date.toLocaleDateString())
        .replace('[user]', user.nickName.toUpperCase())
        .replace('[salutation]', salutation.replace(/hi/i, 'howdy'))

}

/**
 * Not very interesting
 */
formatMessageCurried(salutation)(user)(date)(message) // > "Today, 24/6/2019, JAX says howdy"

/**
 * This is really interesting
 */
const formatMsgWithSalutationUserAndDate = formatMessageCurried(salutation)(user)(date);

formatMsgWithSalutationUserAndDate(message) // > "Today, 24/6/2019, JAX says howdy"
formatMsgWithSalutationUserAndDate(message2) // > "Hellow JAX you have to say howdy before the end of 24/6/2019"

```

### Partial Application

> In computer science, partial application (or partial function application) refers to the process of fixing a number of arguments to a function, producing another function of smaller arity. [Wikipedia](https://en.wikipedia.org/wiki/Partial_application)

Difference from Currying
> One of the significant differences between the two is that a call to a partially applied function returns the result right away, not another function down the currying chain. [Wikipedia](https://en.wikipedia.org/wiki/Currying#Contrast_with_partial_function_application)

```javascript
/**
 * No partial
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x, y){
    return x + y;
}
add(3, 4); // > 7

/**
 * Partial
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Partially_applied_functions
 *
 * @param {number} y
 * @returns {number}
 */
var add_partial = add.bind(null, 3);

add_partial(4); // -> 7

```

```javascript

/**
 * Using multilevel binary partially applied functions to retunr an unary
 * (f ∘ g )(v)
 *
 * @param  {...function} args
 * @returns {Function}
 */
function multiLevelPartialRight (...args) {
    let cfn = (v) => v;

    while (args.length) {
        cfn = args.pop().bind(null, cfn)
    }

    return cfn
}

multiLevelPartialRight(
    /* f */(fn, v) => fn(v) + 1,
    /* g */(fn, v) => fn(v) * 2
)(2) // >  (f ∘ g )(v) = 5

```

### First-class composition

> In computer science, function composition is an act or mechanism used to **combine** simple functions to build more complicated ones. Like the usual composition of functions in mathematics, **the result of each function is passed as the argument of the next, and the result of the last one is the result of the whole**. [Wikipedia](https://en.wikipedia.org/wiki/Function_composition_(computer_science))

Simple use-case
> If an airplane's elevation at time `t` is given by the function `h(t)`, and the oxygen concentration at elevation `x` is given by the function `c(x)`, then `(c ∘ h)(t)` describes the oxygen concentration around the plane at time `t`. [Wikipedia](https://en.wikipedia.org/wiki/Function_composition#Examples)

A well known usecase is a mapper or transducer
> From a given response data, remove duplicates, normalize numbers, sort by N.... and so on

Notes:

- the flow is right-to-left, calling each function with the output of the latest provided first.
- JavaScript doesn't have a `composition` operator like Haskell
- JavaScript have Lambda expressions!!

```javascript

/**
 * simplest imperative nested solution
 * n(x) = f(g(x))
 *
 * Notation:
 * ( f ∘ g )(x) = f(g(x) // f ∘ g means f after g
 *
 * Alternative postfix notation:
 * (xg)f
 * @see https://en.wikipedia.org/wiki/Reverse_Polish_notation
 *
 * @param {Function} f
 * @param {Function} g
 */
function fog (f, g) { return (x) => f(g(x)) };

fog(
    /* f */  v => v + 1,
    /* g */ v => v * 2
)(2) // >  (f ∘ g )(v) = 5

```

```javascript

/**
 * Iterative solution
 * (f ∘ g )(v)
 *
 * @param  {...function} args
 * @returns {Function}
 */
function composeSequenceRight (...args) {

    return (v) => {
        while (args.length) {
            v = args.pop()(v)
        }
        return v;
    }

}

composeSequenceRight(
    /* f */  v => v + 1,
    /* g */ v => v * 2
)(2) // >  (f ∘ g )(v) = 5

```

```javascript

/**
 * Iterative oneliner functional style solution
 * (f ∘ g )(v)
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
 *
 * @param  {...function} args
 * @returns {Function}
 */
const composeRight = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)

composeRight(
    /* f */  v => v + 1,
    /* g */ v => v * 2
)(2) // >  (f ∘ g )(v) = 5

```

### Readings:

- [Composing Exercises in Programming Style](https://blog.frankel.ch/exercises-programming-style/6/)
- [Partially Applied Functions In JavaScript](https://lostechies.com/derickbailey/2012/07/20/partially-applied-functions-in-javascript/)
- [JavaScript Function Composition, Currying, and Partial Application](https://medium.com/wdstack/javascript-function-composition-currying-and-partial-application-5a04107530ee)
- [Curry or Partial Application?](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8)
- [Creating partially applied functions in Javascript](https://codeburst.io/creating-partially-applied-functions-in-javascript-1f623a56d055)

***
[Go back to DAY 11](/day_11.md)
***
[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-12)