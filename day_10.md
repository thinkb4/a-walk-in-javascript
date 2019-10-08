# [A walk in JavaScript](/README.md)

## DAY 10

- JavaScript, where does it live?
- The ECMAScript engine
  - What does the engine actually do?
  - How many of them are there?
  - That's it?
- The ECMAScript runtime
  - Web Browser
  - Node
  - MIXED ENVIRONMENT <https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/apA.md>
- Javascript and the web
  - V8, SpiderMonkey, Chakra, WebKit, Hermes
  - HTML
  - CSS
  - .. good practices

## JavaScript, where does it live?

During this walk we mentioned several times a set of concepts related to JavaScript (but not only) that we'll explore a little deeper today.

- ECMA International
- ECMAScript
- ECMA-262
- JavaScript
- JavaScript engine
- JavaScript Runtime

Let's remember what are they.

**ECMA International** is an organization dedicate to define and maintain technology standards, one of the standards is **ECMAScript** identified as **ECMA-262** which specifies the rules, details and guidelines so you can create a programming language in **compliance to ECMAScript standard**.
**JavaScript** is one of this languages (one of many) and even though historically it was created before the standard, today it follows it.
In order to be interpreted and executed, a programming language might need an **engine**, JavaScript is one of this cases but all ECMAScript compliant languages will need an engine; and this statement will generally apply to the **ECMAScript engine** itself, which will require a **Host Environment** as well.
This **Host environment** (a.k.a **ECMAScript Runtime**) will provide to the engine the necessary elements to interact with other systems.

## The ECMAScript Engine

### What does the engine actually do?

So what does the engine actually do? (briefly)

- once your text file is loaded, the engine will performing a [lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis) by reading the sequences of characters and try to convert them into a sequence of meaningful strings ([tokens](https://en.wikipedia.org/wiki/Lexical_analysis#Token)) for the specific language (a.k.a. tokenization).
- once the lexer successfully identifies those meaningful pieces it's time to perform a [syntactic analysis](https://en.wikipedia.org/wiki/Parsing) (parsing) to make sure the tokens can be related making valid expressions.
- no errors so far, so it's time for a [semantic analysis](https://en.wikipedia.org/wiki/Semantic_analysis_(computer_science)), here a lot of things will happen, essentially to make sure the program can be accurately represented and the resources of the program such as [types](https://en.wikipedia.org/wiki/Type_checking), [bindings](https://en.wikipedia.org/wiki/Object_binding) and [assignments](https://en.wikipedia.org/wiki/Definite_assignment_analysis) are valid and the [Symbol Table](https://en.wikipedia.org/wiki/Symbol_table) could be successfully created and the [intermediate representation](https://en.wikipedia.org/wiki/Intermediate_representation) of the code was generated
- no what? It's time to convert that IR into something the machine can execute (e.g. [machine code](https://en.wikipedia.org/wiki/Machine_code)). In the modern JavaScript engines (originally introduced by [V8](https://chromium.googlesource.com/v8/v8)) this happens in [runtime](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)) (during execution) and is known as [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation)
- the? Again, pretty much all modern ECMAScript engines, especially JavaScript engines implement some form of optimization (e.g V8's [TurboFan](https://v8.dev/blog/launching-ignition-and-turbofan))

### How many of them are there?

More than 30

<img src="https://i.imgur.com/ywOjtAC.png" width="250"/>

Yup, at least that's the list of known implementation but there might be more. Some of them compile to machine code using JIT, some doesn't, some are new, or old, designed for web browsers or to be embedded.

You can check a quite long List of [ECMAScript engines in Wikipedia](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)

## The ECMAScript runtime


