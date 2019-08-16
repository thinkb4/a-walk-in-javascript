# JavaScript Coding Club

## DAY 1

- Introduction to JavaScript
  - What is JS anyway?
  - What's ECMAScript?
  - Language features quick overview
  - Myths busted
- Initial workspace Setup
  - Basic Runtime ( Node )
  - IDE ( Visual Studio Code )
  - Run Code extension
  - Introduction to NPM
- ES5 vs ES6
  - Relevant differences
  - Relevant improvements
  - Why are we using ES6 in this course?
  - After ES6?

## Introduction to JavaScript

A great overview regarding ECMAScript and JavaScript.
[Article by Michael Aranda](https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/)

> JavaScript began as and primarily still is a language for scripting inside web browsers; however, the standardisation of the language as ECMAScript has made it popular as a general-purpose embeddable language. In particular, the Mozilla implementation SpiderMonkey is embedded in several environments such as the Yahoo! Widget Engine. Other applications embedding ECMAScript implementations include the Adobe products Adobe Flash (ActionScript) and Adobe Acrobat (for scripting PDF files). [Scripting Language - Wikipedia](https://en.wikipedia.org/wiki/Scripting_language)

### Languages features quick overview

- [Dynamic typed](https://en.wikipedia.org/wiki/Dynamic_typing)
- Functions as [first-class citizens](https://en.wikipedia.org/wiki/First-class_citizen)

- **Multi-paradigm language**
  - [Structured](https://en.wikipedia.org/wiki/Structured_programming)
    - [Imperative](https://en.wikipedia.org/wiki/Imperative_programming) in which the programmer instructs the machine how to change its state,
      - [Procedural](https://en.wikipedia.org/wiki/Procedural_programming) which groups instructions into procedures,
      - [Object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) which groups instructions together with the part of the state they operate on,
      - [Prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming)
    - [Declarative](https://en.wikipedia.org/wiki/Declarative_programming) in which the programmer merely declares properties of the desired result, but not how to compute it ( e.g regex )
      - [Functional](https://en.wikipedia.org/wiki/Functional_programming) in which the desired result is declared as the value of a series of function applications,

  - [Event-driven](https://en.wikipedia.org/wiki/Event-driven_programming)
- [Client-side](https://en.wikipedia.org/wiki/Client-side)
  - Web Browsers
- [Server-side](https://en.wikipedia.org/wiki/Server-side)
  - Node.js

[See more](https://en.wikipedia.org/wiki/JavaScript#Features)

### Myths busted

> **[MYTH]** JavaScript === Client-Side

Well that's easy to prove ... lets say ... starting with Node.js

> **[MYTH]** JavaScript === Front-End

Humm, see above? and ... what's FE anyway? is it the visual aspect? the user interaction handling? the data process occurring when an API is consumed to store a denormalized version of the schema in a local database?

> **[MYTH]** JavaScript === "interpreted" language.

JavaScript is not an "interpreted" language anymore!!! or ar least is not ONLY interpreted. Since V8 introduced [JIT compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) in 2008, all modern browsers started overhauling their engines to be able to compete.
Several improvements were based on pre-compiling optimizations, including (but not only) the generation of an intermediate Bytecode and a post optimization to produce machine code. Also several optimization initiatives were disregarded along the way like V8's Full-codegen and [Crankshaft](https://blog.chromium.org/2010/12/new-crankshaft-for-v8.html).

Here some interesting articles

- [V8 Background compilation](https://v8.dev/blog/background-compilation)
- [V8 Ignition + TurboFan](https://v8.dev/blog/launching-ignition-and-turbofan)
- [Understanding V8's ByteCode](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775)
- [SpiderMonkey ByteCodes](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Internals/Bytecodes)

## Initial workspace setup

1. [Install Node.js](https://nodejs.org/en/)
2. [Install VS Code](https://code.visualstudio.com/)
3. Add the following extensions to VS Code
   1. a
   2. b
4. [Introduction to NPM](https://docs.npmjs.com/about-npm/)

## ES5 vs ES6

- Relevant differences
- Relevant improvements
- Why are we using ES6 in this course?
- After ES6?
