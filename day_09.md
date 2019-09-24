# [A walk in JavaScript](/README.md)

## DAY 9

- Asynchronous programming
  - Event Loop
  - Callback
  - Promises
  - Async/Await
  - .. good practices

## Asynchronous programming

Until ES6 (we'll get into that later, but we already saw a glimpse of that with Generators) there was nothing in the JS core specifying asynchronism, it had a fire-heated mark with the words "run-to-completion". In fact all asynchronous behavior depended on the host environment providing some kind of API in order to handle the asynchronism on it's side and communicate to the JavaScript engine the outcome if necessary.

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

Here an simplified example of callback you might have used but now you'll know better what id does.

```javascript
setTimeout( () => console.log(`I'm running late...er`), 1000 );
```

Can you describe, in your words like a bedtime story, what's happening with that code? Need a help with that? Let's move on and take a final step into this with [YDKJS - Async & Performance - Callbacks](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md) | by Kyle Simpson

---

### Promises

Let's imagine we need to perform a task, you don't know how much it's gonna take but we need both make sure to do something whilst it's done AND in the meantime do something else AND have a complete control over the outcomes to prevent weir things happening.

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

After a few moments thinking about it you might say "that's easy", I won't gent into the "using `console`" implications, but let's imagine that you need `B`to happen only if `A`  is successful, AND `C`AND `D` should happen either way. Now our code starts looking not only hard to read but also hard to maintain, which is the doorway to a tsunami of bugs swarming to you.

So, what's a promise and why it might help here?

Imagine this:
> I'm an Object, and once you give me a specific task I PROMISE YOU I'll let you know when I did it,  telling wether I SUCCEEDED or FAILED providing you the summary (outcome) so you can use it, THEN you can do something with that info if I SUCCEEDED OR alternatively do something with my FAILURE. FINALLY you might want to do something either way.

That's something you are used to do with other people, isn't it?

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

...

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
