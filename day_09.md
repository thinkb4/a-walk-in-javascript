# [A walk in JavaScript](/README.md)

## DAY 9

- Asynchronous programming
  - Event Loop
  - Callback
  - Promises
  - Async/Await
  - Exercises

## Asynchronous programming

Until ES6 (we'll get into that later, but we already saw a glimpse of that with Generators) there was nothing in the JS core specifying asynchronism, it had a fire-heated mark with the words "run-to-completion". In fact all asynchronous behavior depended on the host environment providing some kind of API in order to handle the asynchronism on its side and communicate to the JavaScript engine the outcome if necessary.

For example, you will find references and definitions of **timers** on the MDN documentation for [WindowOrWorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope) describing them in the context of a browser host environment but if you make a search of **timer** or **timeout** in the [ES6](https://www.ecma-international.org/ecma-262/6.0/) spec you'll find ... absolutely nothing! So what does it mean? Plain a simple, it means **JavaScript has no notion of timers**, the host does, and as we discussed in previous chapters, a web browser is not the only host for JavaScript, it's just one of many AND most likely this very environment host doesn't even have the code to perform the asynchronism, it acts just as a bridge to their own host which might happen to be an operative system!!!!

### Event Loop

One of this mechanisms to asynchronism is the **event-loop**, but what's that?

#### General definition

> In computer science, the **event loop**, **message dispatcher**, **message loop**, **message pump**, or **run loop** is a programming construct that waits for and dispatches [events](https://en.wikipedia.org/wiki/Event-driven_programming) or [messages](https://en.wikipedia.org/wiki/Message_Passing_Interface) in a [program](https://en.wikipedia.org/wiki/Computer_program). It works by making a request to some internal or external "event provider" (that generally [blocks](https://en.wikipedia.org/wiki/Blocking_(computing)) the request until an event has arrived), and then it calls the relevant [event handler](https://en.wikipedia.org/wiki/Event_handler) ("dispatches the event").
>
> Source: [Wikipedia - Event loop](https://en.wikipedia.org/wiki/Event_loop)

That was too dry, wasn't it?

Let's try with MDN.

> A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function which gets called in order to handle the message.
>
> At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.
>
> The processing of functions continues until the stack is once again empty; then the event loop will process the next message in the queue (if there is one).
>
> Source: [MDN - Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

Ok that's better but still ... dry-ish.

Thankfully we have two invaluable resources to finally understand the event loop

- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) | Philip Roberts | JSConf EU
- [YDKJS - Async & Performance - Chapter 1: Asynchrony: Now & Later](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch1.md) | Kyle Simpson
- [What you should know to really understand the Node.js Event Loop](https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c) | Daniel Khan

---

### Callback

> A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
>
> Here is a quick example:
>
>```javascript
> function greeting(name) {
>  alert('Hello ' + name);
>}
>
>function processUserInput(callback) {
>  var name = prompt('Please enter your name.');
>  callback(name);
>}
>
>processUserInput(greeting);
>```
>
> The above example is a synchronous callback, as it is executed immediately.
>
> Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as fetch().
>
> Source: [MDN - Callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

Let's take a look at a [general definition of callback on Wikipedia](https://en.wikipedia.org/wiki/Callback_(computer_programming))

Here is a simplified example of callback you might have used but now you'll understand more about what it is doing.

```javascript
setTimeout( () => console.log(`I'm running late...er`), 1000 );
```

Can you describe, in your own words like a bedtime story, what's happening with that code? Need a help with that? Let's move on and take a final step into this with [YDKJS - Async & Performance - Callbacks](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md) | by Kyle Simpson

---

### Promises

Let's imagine we need to perform a task, we don't know how much it's gonna take but we need both make sure to do something whilst it's done AND in the meantime do something else AND have a complete control over the outcomes to prevent weird things happening.

If we do that with callbacks we'll end up in hell, actually there's a name for that, [callback hell](https://en.wiktionary.org/wiki/callback_hell), and there's even a [website](http://callbackhell.com/) with that name!

Let's make and example.

```javascript

setTimeout( () => {
  console.log(`A`);
  setTimeout( () => {
    console.log(`B`);
    setTimeout( () => {
      console.log(`C`);
      setTimeout( () => {
        console.log(`D`);
      }, 1000 );
    }, 100 );
  }, 0 );
}, 5000 );

```

After a few moments thinking about it you might say "that's easy", I won't get into the "using `console`" implications, but let's imagine that you need `B` to happen only if `A`  is successful, AND `C` AND `D` should happen either way. Now our code starts looking not only hard to read but also hard to maintain, which is the doorway to a tsunami of bugs swarming to you.

So, what's a promise? why it might help here?

Imagine this:
> I'm an Object, and once you give me a specific task I PROMISE YOU I'll let you know when I did it,  telling whether I SUCCEEDED or FAILED providing you the summary (outcome) so you can use it, THEN you can do something with that info if I SUCCEEDED OR alternatively do something else with my FAILURE. FINALLY you might want to do something either way.

That's something you are used to do with other people, isn't it?

#### Syntax

```javascript
  new Promise(executor);
  // or
  new Promise((resolve, reject) => {
    executor body
  });
```

Well, Promises work kinda that.

```javascript
  new Promise((resolve, reject) => {
      console.log('I started');
      resolve();
  })
  .then(() => {
      console.log(`A`);
      throw new Error('I failed in A');
  })
  .then(() => {
      console.log(`B`);
  })
  .catch((reason) => {
      console.log(reason);
  })
  .finally(() => {
      console.log(`C`);
      console.log(`D`);
  });

```

Easy to read, easy to control ... sort of, but definitely better than callback hell.

Too much talking, let go to the best sources you can get.

- [ECMAScript Promise Objects](https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects)
- [ECMAScript Promise Constructor](https://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor)
- [MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [YDKJS - Async & Performance - Chapter 3: Promises](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md) | by Kyle Simpson

---

### Async/await

Wait, what? We were talking about ES2015 but this is not an ES2015 feature, nor ES2016!! We had to wait until ES2017 (ES8?? nope, remember that's not the way to name ES versions anymore) to have it.
Then why are we talking about this? Simply because is one of the most important tools (together with generators and promises) to write asynchronous programs in JavaScript today.

Imagine there's a feature to handle under the hood the event loop and the promises to **operate asynchronously BUT resembles synchronous** code on its syntax. Since many program errors are originated on the difficulty of understanding a complex structure (e.g. like a promise chain) this feature might help with that, isn't it?

First things first. If we go to the [ECMA2017 - 9.2 - ECMAScript Function Objects definition](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-ecmascript-function-objects) we'll find that `async` is one of the 4 kinds of functions `normal`, `classConstructor` , `generator` and `async`, and if you search "async" there list of results is around 450. There's a lot to read there if you want to; I'd suggest you start reading the [14.6 - Async Function Definition](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-async-function-definitions) first.

Again, even if the spec gets more sweet and friendly over time, it's still dry (but it'd be IMHO the first thing to read).

Let's go for something more friendly.

#### Async Function declaration statement

> The async function declaration defines an asynchronous function, which returns an [AsyncFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction) object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.
>
> You can also define async functions using an [async function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function).
>
> Source: [MDN: Async Function declaration statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

##### Syntax

```javascript
async function name([param[, param[, ... param]]]) {
   statements
}
```

#### Async Function expression

> An async function expression is very similar to, and has almost the same syntax as, an async function statement. The main difference between an async function expression and an async function statement is the function name, which can be omitted in async function expressions to create anonymous functions. An async function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. See also the chapter about functions for more information.
>
> Source: [MDN - async function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)

##### Syntax

```javascript
async function [name]([param1[, param2[, ..., paramN]]]) {
   statements
}
```

#### Async Function constructor

> async function objects created with the AsyncFunction constructor are parsed when the function is created. This is less efficient than declaring an async function with an async function expression and calling it within your code, because such functions are parsed with the rest of the code.
>
All arguments passed to the function are treated as the names of the identifiers of the parameters in the function to be created, in the order in which they are passed.
>
Invoking the AsyncFunction constructor as a function (without using the new operator) has the same effect as invoking it as a constructor.
>
> Source: [MDN - AsyncFunction constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)

##### Syntax

Note that AsyncFunction is not a global object. It could be obtained by evaluating the following code.

```javascript
var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody);
```

#### Await

> The `await` expression causes `async` function execution to pause until a `Promise` is settled, that is fulfilled or rejected, and to resume execution of the async function after fulfillment. When resumed, the value of the `await` expression is that of the fulfilled `Promise`.
>
> If the `Promise` is rejected, the `await` expression throws the rejected value.
>
> If the value of the expression following the `await` operator is not a `Promise`, it's converted to a [resolved Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve).
>
> An await can split execution flow, allowing the caller of the `await`'s function to resume execution before the deferred continuation of the `await`'s function. After the `await` defers the continuation of its function, if this is the first await executed by the function, immediate execution also continues by returning to the function's caller a pending `Promise` for the completion of the `await`'s function and resuming execution of that caller.
>
> Source: [MDN - await operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

##### Syntax

```javascript
[rv] = await expression;
```

---

## Exercises

Let's open our test files:

- [event loop](/src/day_09/eventLoop.test.js)
- [callback](/src/day_09/callback.test.js)
- [promise](/src/day_09/promise.test.js)
- [async/await](/src/day_09/asyncAwait.test.js)

Now open your terminal.

1. Make sure you're at the project location
2. If you didn't install all the packages yet then run `npm i` for a fresh dependency install, or `npm ci` for an installation based on the lock file.
3. Type `npm run test:watch`, this will start running your tests every time you make a change.

**Our task is to make ALL our DAY 9 tests pass ;)**

***
[Go back to DAY 8](/day_08.md) or [Go next to DAY 10](/day_10.md)
***
[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-9)