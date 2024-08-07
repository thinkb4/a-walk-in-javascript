# [A walk in JavaScript](/README.md)

## DAY 10

- JavaScript, where does it live?
  - The ECMAScript Engine
  - What does the engine actually do?
    - Visual guide based on V8
  - How many of them are there?
  - Engines Differences
- The ECMAScript runtime
  - Runtimes Differences
  - Similarities
- Javascript and the web
  - HTML
  - CSS
- TL;DR
- Complementary readings

## JavaScript, where does it live?

During this walk we mentioned several times a set of concepts related to JavaScript (but not only) that we'll explore a little deeper today.

- ECMA International
- ECMAScript
- ECMA-262
- JavaScript
- JavaScript engine
- JavaScript Runtime

Let's remember what are they.

**ECMA International** is an organization dedicated to defining and maintaining technology standards, one of the standards is **ECMAScript** identified as **ECMA-262** which specifies the rules, details and guidelines so you can create a programming language in **compliance to the ECMAScript standard**.

**JavaScript** is one of these languages (one of many) and even though historically it was created before the standard, today it follows it.
In order to be interpreted and executed, a programming language might need an **engine**, JavaScript is one of these cases but all ECMAScript compliant languages will need an engine; and this statement will generally apply to the **ECMAScript engine** itself, which will require a **Host Environment** as well.
This **Host environment** (a.k.a **ECMAScript Runtime**) will provide to the engine the necessary elements to interact with other systems.

## The ECMAScript Engine

### What does the engine actually do?

So what does the engine actually do? (briefly)

- Once your text file has been loaded, the engine will perform a [lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis) by reading the sequences of characters and try to convert them into a sequence of meaningful strings ([tokens](https://en.wikipedia.org/wiki/Lexical_analysis#Token)) for the specific language (a.k.a. tokenization).
- Once the lexer successfully identifies those meaningful pieces it's time to perform a [syntactic analysis](https://en.wikipedia.org/wiki/Parsing) (parsing) to make sure the tokens can be related making valid expressions.
- If there are no errors so far, it's time for a [semantic analysis](https://en.wikipedia.org/wiki/Semantic_analysis_(computer_science)). Here a lot of things will happen, essentially to make sure the program can be accurately represented, and the resources of the program such as [types](https://en.wikipedia.org/wiki/Type_checking), [bindings](https://en.wikipedia.org/wiki/Object_binding) and [assignments](https://en.wikipedia.org/wiki/Definite_assignment_analysis) are valid. Additionally it ensures that the [Symbol Table](https://en.wikipedia.org/wiki/Symbol_table) was successfully created and the [intermediate representation](https://en.wikipedia.org/wiki/Intermediate_representation) of the code was generated
- Now what? It's time to convert that IR into something the machine can execute (e.g. [machine code](https://en.wikipedia.org/wiki/Machine_code)). In the modern JavaScript engines (originally introduced by [V8](https://chromium.googlesource.com/v8/v8)) this happens in [runtime](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)) (during execution) and is known as [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation)
- Then? Again, pretty much all modern ECMAScript engines, especially JavaScript engines implement some form of optimization (e.g V8's [TurboFan](https://v8.dev/blog/launching-ignition-and-turbofan))

#### Visual guide based on V8

| HEAP (memory allocation)                                                                                                                                                                                                                                                         | EXECUTION CONTEXT STACK (call stack)                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Here the engine stores the memory addresses for compound data  ( e.g. objects and object subtypes like functions, arrays).  This memory doesn't depend on the execution context and will persist until the Garbage Collector can claim it.   - **Garbage Collector (Orinoco)** | The ECS is tied to the function execution. When a function is called, it'll be added to the stack in a LIFO order. It runs synchronously and when its execution has been completed it'll be popped off the stack and the engine will take the next item on the stack.  Javascript has only ONE ECS, therefore one thing at a time can be executed.  **Interpreters (TurboFan)** -  **Optimizers (Ignition)** |

### How many of them are there?

More than 30

<img src="https://i.imgur.com/ywOjtAC.png" width="250"/>

Yup, at least that's the list of known implementations but there might be more. Some of them compile to machine code using JIT, some don't, some are new, or old, designed for web browsers or to be embedded.

You can check a quite long List of [ECMAScript engines in Wikipedia](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)

### Engines Differences

[Comparison between different JavaScript engines](https://en.wikipedia.org/wiki/Comparison_of_JavaScript_engines).

## The ECMAScript runtime

We said "This Host environment (a.k.a ECMAScript Runtime) will provide to the engine the necessary elements to interact with other systems.", can we have a concrete example?

Let's try to be simple:
We know two runtimes that share the same engine: V8 is the JavaScript engine for both Chrome and Node.js, the overlapping surface between both runtimes is huge but there are also big differences. See the table below.

### Runtimes Differences

- Chrome
  - [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) (tons of them)
  - `window` predefined global object
  - `location` global object
  - `document` global object
  - `import`
  - ES6 modules
- Node.js
  - headless
  - `global`predefined global object
  - `require`
  - `process`
  - CommonJs modules

### Similarities

- Timers
- Event Loop
- Callback Queue

Why should I care? because even though we're writing JavaScript, depending on the runtime for the same engine, our program might shamefully fail or it could be extremely hard to test.

Here some more cases of mixed environments differences from [YDKJS: Types & Grammar - Mixed Environment JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20&%20grammar/apA.md) by Kyle Simpson.

## Javascript and the web

Despite the fact that JavaScript, today, is much more than a language for the web; it's still one of the heaviest usage of the language, particularly webb applications delivered as "web pages". Therefore is extremely important that you know not only JavaScript but also HTML and CSS (there's an interesting [Roadmap to becoming a web developer in 2019](https://github.com/kamranahmedse/developer-roadmap) written by Kamran Ahmed if you want to read more)

We won't get deep into them as that's not the scope of this course, but at least we'll review their definitions and some basic features.

### HTML

> **Hypertext Markup Language (HTML)** is the standard [markup language](https://en.wikipedia.org/wiki/Markup_language) for documents designed to be displayed in a [web browser](https://en.wikipedia.org/wiki/Web_browser). It can be assisted by technologies such as [Cascading Style Sheets](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) (CSS) and [scripting languages](https://en.wikipedia.org/wiki/Scripting_language) such as [JavaScript](https://en.wikipedia.org/wiki/JavaScript).
>
> Web browsers receive HTML documents from a [web server](https://en.wikipedia.org/wiki/Web_server) or from local storage and [render](https://en.wikipedia.org/wiki/Browser_engine) the documents into multimedia web pages. HTML describes the structure of a web page [semantically](https://en.wikipedia.org/wiki/Semantic_Web) and originally included cues for the appearance of the document.
>
> [HTML elements](https://en.wikipedia.org/wiki/HTML_element) are the building blocks of HTML pages. With HTML constructs, images and other objects such as [interactive forms](https://en.wikipedia.org/wiki/Fieldset) may be embedded into the rendered page. HTML provides a means to create [structured documents](https://en.wikipedia.org/wiki/Structured_document) by denoting structural semantics for text such as headings, paragraphs, lists, [links](https://en.wikipedia.org/wiki/Hyperlink), quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as `<img />` and `<input />` directly introduce content into the page. Other tags such as `<p>` surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page.
>
> HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. Inclusion of CSS defines the look and layout of content.
>
> The **[World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), former maintainer of the HTML and current maintainer of the CSS standards**, has encouraged the use of CSS over explicit presentational HTML since 1997.
>
> Source: [Wikipedia](https://en.wikipedia.org/wiki/HTML)

### CSS

> **Cascading Style Sheets (CSS)** is a [style sheet language](https://en.wikipedia.org/wiki/Style_sheet_language) used for describing the [presentation](https://en.wikipedia.org/wiki/Presentation_semantics) of a document written in a markup language like HTML. CSS is a cornerstone technology of the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web), alongside HTML and JavaScript.
>
> CSS is designed to enable the separation of presentation and content, including [layout](https://en.wikipedia.org/wiki/Page_layout), [colors](https://en.wikipedia.org/wiki/Color), and [fonts](https://en.wikipedia.org/wiki/Typeface). This separation can improve content [accessibility](https://en.wikipedia.org/wiki/Accessibility), provide more flexibility and control in the specification of presentation characteristics, enable multiple [web pages](https://en.wikipedia.org/wiki/Web_page) to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.
>
> Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or [screen reader](https://en.wikipedia.org/wiki/Screen_reader)), and on [Braille-based](https://en.wikipedia.org/wiki/Braille_display) tactile devices. CSS also has rules for alternate formatting if the content is accessed on a [mobile device](https://en.wikipedia.org/wiki/Mobile_device).
>
> The name "cascading" comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.
>
> The CSS specifications are maintained by the [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C). Internet media type ([MIME type](https://en.wikipedia.org/wiki/MIME_media_type)) text/css is registered for use with CSS by [RFC 2318](https://tools.ietf.org/html/rfc2318) (March 1998). The W3C operates a free [CSS validation service](https://en.wikipedia.org/wiki/W3C_Markup_Validation_Service#CSS_validation) for CSS documents.
>
> Source: [Wikipedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

## TL;DR

- **JavaScript Engine:** takes care of the analysis and execution of the code
- **JavaScript Runtime:** takes care of running the JavaScript engine and provides mechanisms for communicating with other systems (e.g. timers, external resources) through specific APIs
- **HTML:** takes care of presenting the information to the browser in a semantic way by delivering a structured document and informing the browser about external resources required for the presentation (e.g. js, css, fonts)
- **CSS:** takes care of defining the structured document (HTML) to cover different presentational (rendering) needs such as visual aspect (e.g desktop vs mobile displays), specific devices (e.g. printers), accessibility (e.g. screen readers, Braille tactile devices)

## Complementary readings

- [The Javascript Runtime Environment](https://medium.com/@olinations/the-javascript-runtime-environment-d58fa2e60dd0) by Jaime Uttariello
- [What’s the difference between JavaScript and ECMAScript?](https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/) by Michael Aranda
- [JavaScript Internals: JavaScript engine, Run-time environment & setTimeout Web API](https://blog.bitsrc.io/javascript-internals-javascript-engine-run-time-environment-settimeout-web-api-eeed263b1617) by Rupesh Mishra
- [JavaScript V8 Engine Explained](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef) by Kadishay
- [How JavaScript works: inside the V8 engine + 5 tips on how to write optimized code](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e) by Alexander Zlatkov
- [Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code](https://www.freecodecamp.org/news/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964/) by Mayank Tripathi

***
[Go back to DAY 9](/day_09.md) or [Go next to DAY 11](/day_11.md)
***
[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-10)