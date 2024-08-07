# [A walk in JavaScript](/README.md)

## DAY 11

- Quality and reliability
  - An introduction to the "reliability" and "quality" concepts
- Unit / Integration / Functional testing
  - Definitions
  - Comparison
  - TDD
  - Testing frameworks for JavaScript
- Debugging
  - Debugging tools available for JavaScript
    - Global console object
    - Node.js console
    - debugger statement
    - node.js debugger
    - Browser's developer tools
    - IDE interaction with a browser to debug
- Transpilers
  - Babel
- Task runners, bundlers, build systems
  - Webpack
  - Grunt
  - Gulp
  - Brunch
  - Yeoman
  - RollUp

## Quality and reliability

### An introduction to the "reliability" and "quality" concepts

Even though both aspects a intimately related, they're many differences between them. We can think about them in the following terms:

- **Quality**
  - Closest to the code
  - Testability
  - Readability
  - Scalability
  - Reusability
  - Functional correctness
  - Robustness
  - "code" defects
  - Peer reviews
  - unit tests
  - Code coverage
- **Reliability**
  - Closest to the execution in a host/environment for a given time
  - Stress test
  - Load test
  - Performance
  - Regression test
  - "failure" intensity, probability and statistics
  - End to end test
  - Integration test
  - Faults per thousand lines of code in x time

In the software industry, there's a big overlap between quality and reliability, and the better the quality assurances processes applied to the code production, the more reliable the software tends to be.

The bibliography is huge and there are many definitions, sometimes you'll find yourself asking the client *"what does quality mean to you"* to be able to sketch out a plan and avoid investing efforts  in the "wrong" place.

My general approach is that "the quality is owned by the team", every engineer MUST take the necessary measures to warrant the written code and propose corrections if brittle code has been detected. One of the most important measures is to recognize the fact that you WILL introduce defects in the code you write, no matter how much of an expert you are—eventually you'll break something. So don't trust yourself excessively, ask around for opinions, write tests, make it readable instead of "smart" and try to be a better engineer every single day.

Here is some reading to start.

- [Software quality](https://en.wikipedia.org/wiki/Software_quality)
- [Software reliability testing](https://en.wikipedia.org/wiki/Software_reliability_testing)
- [Reliability engineering in software](https://en.wikipedia.org/wiki/Reliability_engineering#Software_reliability)
- [What Is Code Quality? And How to Improve It](https://www.perforce.com/blog/sca/what-code-quality-and-how-improve-it) - by Richard Bellairs
- [Software Reliability](https://www.sciencedirect.com/topics/computer-science/software-reliability)
- [CISQ Code quality Standards](https://www.it-cisq.org/standards/code-quality-standards/)

## Unit / Integration / Functional testing

Usually the metaphor of a Pyramid is used to describe the impact of the different testing techniques and how speed, ROI, cost and other aspects are related to them. There are several "Pyramids" with some variations, but usually it starts with unit testing on the base of the pyramid, followed by integration and ending with functional testing, where the base provides the biggest benefits and the rest is built on top of that. (here an interesting article with a variation of this. [The practical test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) by Ham Vocke)

### Definitions

- [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing)
- [Integration Testing](https://en.wikipedia.org/wiki/Integration_testing)
- [Functional Testing](https://en.wikipedia.org/wiki/Functional_testing)

### Comparison

I've found this incredibly clear table for the first two types to show you the characteristics of both techniques on the ["Software testing class"](http://www.softwaretestingclass.com/what-is-difference-between-unit-testing-and-integration-testing/) website.

<table><tbody><tr><td style="text-align: center;"><strong>Unit Testing</strong></td><td style="text-align: center;"><strong>Integration Testing</strong></td></tr><tr><td>Unit testing is a type of testing to check if the small piece of code is doing what it is suppose to do.</td><td>Integration testing is a type of testing to check if different pieces of the modules are working together.</td></tr><tr><td>Unit testing checks a single component of an application.</td><td>The behavior of integration modules is considered in the Integration testing.</td></tr><tr><td>The scope of unit testing is narrow, it covers the "unit" or small piece of code under test. Therefore while writing a unit test shorter code is used that target just a single class.</td><td>The scope of integration testing is wide, it covers the whole application under test and it requires much more effort to put together.</td></tr><tr><td>Unit tests should have no dependencies on code outside the unit being tested.</td><td>Integration testing is dependent on other outside systems like databases, hardware allocated for them etc.</td></tr><tr><td>This is first type of testing is to be carried out in Software testing life cycle and generally executed by the developer.</td><td>This type of testing is carried out after unit testing and before System testing and executed by the testing team.</td></tr><tr><td>Unit testing is not further sub divided into different types.</td><td>Integration testing is further divided into different types as follows:<br> Top-down Integration, Bottom-Up Integration and so on.</td></tr><tr><td>Unit testing starts with the module specification.</td><td>Integration testing starts with the interface specification.</td></tr><tr><td>The intricacies of the code are given visibility via unit testing.</td><td>The integration structure is given visibility via Integration testing.</td></tr><tr><td>Unit testing mainly focuses on testing the functionality of individual units and does not uncover the issues that arise when different modules are interacting with each other.</td><td>Integration testing aims to discover the issues that arise when different modules are interacting with each other to build the overall system.</td></tr><tr><td>The goal of unit testing is to test the each unit separately and ensure that each unit is working as expected.</td><td>The goal of Integration testing is to test the combined modules together and ensure that every combined module is working as expected.</td></tr><tr><td>Unit testing comes under White box testing type.</td><td>Integration testing comes under both Black box and White box type of testing.</td></tr></tbody></table>

You can think of it in these terms: both features (door and lock) work perfectly as separated units, but the integration fails.

<img src="https://miro.medium.com/max/1260/1*UtZzMT32fRMnSN-HmgiSVQ.gif" width="250"/>

### TDD

Testing is so important that a particular development process relies on writing the test first and then writing the code to pass them called [Test Drive Development](https://en.wikipedia.org/wiki/Test-driven_development)!
Of course it might sound crazy as many of the [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming) related techniques do, but indulge me and think about this:

Given that you have detailed specifications about how your software/feature should work, what if you first think about how the feature should be tested to make it "testable" and "reliable", then you write the abstract tests it's supposed to accomplish, as a contract, and only then start thinking about the actual code for the feature and finally write it. ... Those steps forced you to think before coding, and especially made you concentrate on how to make your code more testable first instead of writing it and having to iterate on refactoring sessions because it is not testable and maintainable enough.

### Testing Frameworks for JavaScript

The market provides innumerable resources for testing your JavaScript apps, they can be suitable for unit testing, integration testing, automated testing, for UI/E2E, etc. Each one has its pros and cons and some are designed for specific libraries like [QUnit](https://en.wikipedia.org/wiki/QUnit) was for jQuery and some are more robust and generic like [Jest](https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)) but most of them evolved to cover more techniques or died along the way.

Here is a [list of unit testing frameworks](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript) in Wikipedia

## Debugging

So you think that testing your code will be enough huh? LOL not even close, even when you enter a green field (as opposed to legacy code) you'll end up having to deal with "damnit, where the heck is the error?!!!"
Some can be detected with the introduction of more accurate tests, and some will escape from every testing attempt leaving you with the happy task of hunting them with creativity, but don't despair, there are several tools to assist you.

> Debugging is the process of finding and resolving defects or problems within a [computer program](https://en.wikipedia.org/wiki/Computer_program) that prevent correct operation of [computer software](https://en.wikipedia.org/wiki/Computer_software) or a [system](https://en.wikipedia.org/wiki/System).
>
> Debugging tactics can involve [interactive debugging](https://en.wikipedia.org/wiki/Interactive), [control flow](https://en.wikipedia.org/wiki/Control_flow) analysis, [unit testing](https://en.wikipedia.org/wiki/Unit_testing), [integration testing](https://en.wikipedia.org/wiki/Integration_testing), [log file analysis](https://en.wikipedia.org/wiki/Logfile), monitoring at the application or system level, [memory dumps](https://en.wikipedia.org/wiki/Memory_dump), and [profiling](https://en.wikipedia.org/wiki/Profiling_(computer_programming)).
>
> Source: [Wikipedia](https://en.wikipedia.org/wiki/Debugging)

Get familiar with the tools available, use them, learn them as you learn how to use your IDE, they'll save you a lot of time.

### Debugging tools available for JavaScript

#### Global console object

[MDN > Web APIs > console](https://developer.mozilla.org/en-US/docs/Web/API/Console)

One of the most used, misused, underused tools is the globally available `console` object in your browser. It has several methods (but the engineers insist on using just the `console.log`)

#### Node.js console

[node.js > api > console](https://nodejs.org/api/console.html)

Similar to the `console`global object provided by Web Browsers but not quite the same.

#### debugger statement

[MDN - debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)

The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

#### node.js debugger

[node.js > debugger](https://nodejs.org/api/debugger.html)

An out-of-process debugging utility accessible via a V8 Inspector and built-in debugging client.

#### Browser's developer tools

[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)

Every modern browser will provide you with a battery of tools to inspect and debug your web applications. Network traffic, memory usage, performance, code debugging and many more tools will be available for you to understand how your app behaves on that specific browser.

#### IDE interaction with a browser to debug

Some modern IDEs provide you with extensions to be able to use an external browser debugger for your code without leaving your IDE or the other way around, testing an app running in your browser using the IDE debugger.

e.g. [Chrome Debugging for VS Code](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code)

## Transpilers

We saw during this walk that the features defined by ECMAScript might not be implemented in all JavasScript engines. How do we write our code in e.g. ECMA2019 and make sure it'll run on Edge? Transpiling it.

What's a transpiler? essentially a program that takes source code as input and returns source code to match a target system, e.g ES2019 to ES5 or TypeScript to ES2015.
This technique lets you write your code in one consistent way and choose how to create an output for a specific target without taking care of many sources.

One of the most used transpilers for JavaScript is [Babel](https://babeljs.io/)

Here you can see how a simple [generator example taken from MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/function*) is transpiled by Babel

Original:

```javascript
function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}
```

Transpiled:

```javascript
"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(generator);

function generator(i) {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return i;

        case 2:
          return _context.delegateYield(anotherGenerator(i), "t0", 3);

        case 3:
          _context.next = 5;
          return i + 10;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
```

You can try it out [here](https://babeljs.io/repl).

## Task runners, bundlers, build systems

Well, we went through testing, to testing frameworks to transpilers but how in the world do I make them work together?

JavaScript became a huge ecosystem with many tools and techniques for delivering the code like testing, minification, bundling, linting. Here below I'll list some; each of them provide different features which might be broader (like webpack) or more dedicated to a specific task (like grunt)

- [Webpack](https://webpack.js.org/)
- [Grunt](https://gruntjs.com/)
- [Gulp](https://gulpjs.com/)
- [Brunch](https://brunch.io/)
- [Yeoman](https://yeoman.io/)
- [RollUp](https://rollupjs.org/guide/en/)

***
[Go back to DAY 10](/day_10.md) or [Go next to DAY 12](/day_12.md)
***
[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-11)