# [A walk in JavaScript](/README.md)

## DAY 2

- [Syntax, Grammar & Semantics](#syntax-grammar--semantics)
  - [Statements](#statements)
  - [Expressions](#expressions)
  - [Contextual Rules](#semantics)
- [ECMAScript Types](#ecmascript-types)
  - [Value type groups](#value-type-groups)
    - [Primitives](https://en.wikipedia.org/wiki/Primitive_data_type)
      - [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)
      - [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)
      - [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type)
      - [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
      - [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#BigInt_type) ( it's still a [Stage 3 proposal](https://github.com/tc39/proposal-bigint) but Chrome already support it and Firefox and Safari are underway. )
      - [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
      - [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type) ( new in ES6! )
    - [Composite/Compound](#compositecompound)
      - [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects)
  - [Type conversion](#type-conversion)
    - Explicit ( "type casting" )
    - Implicit ( Coercion )
- [Operators](#operators)
  - [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment)
  - [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)
  - [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic)
  - [Bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic)
  - [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical)
  - [String operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String)
  - [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Conditional)
  - [Comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comma)
  - [Unary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Unary)
  - [Relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational)
  - [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - [Operators Precedence](#operators-precedence)
  - [Spread/Rest](#the-case-of-the---spreadrest-operator-)

## Syntax, Grammar & Semantics

As the communicational beings that we are, we all acquire some grade of expertise in one or more kind of languages, which can be expressed through sounds, images, a combination of the first two and an expression of the first through the second, known as characters, that can communicate complete ideas ( e.g. ideograms, icons, emoji ) or sounds ( e.g alphabet ). In our effort to understand languages and the permutations that govern the meaning of that expression, at some point we start defining those rules so everyone can understand, learn and reproduce the language accurately. Programming languages are no exception.  
We're not going to dive deep into nuances and details since it'd require long years of study, but we can briefly take a look at the surface to have a better understanding of what's coming next.

> In computer science, the syntax of a computer language is the set of rules that defines the combinations of symbols that are considered to be a correctly structured document or fragment in that language. This applies both to programming languages, where the document represents source code, and to markup languages, where the document represents data.
>
> **The syntax of a language defines its surface form.** Text-based computer languages are based on sequences of characters, while visual programming languages are based on the spatial layout and connections between symbols (which may be textual or graphical). Documents that are syntactically invalid are said to have a syntax error.
>
> Syntax therefore refers to the form, and it is contrasted with [semantics](<https://en.wikipedia.org/wiki/Semantics_(computer_science)>) – the meaning. In processing computer languages, semantic processing generally comes after syntactic processing; however, in some cases, semantic processing is necessary for complete syntactic analysis, and these are done together or concurrently.
>
> Computer language syntax is generally separated into three levels:
>
> - **Words** – the **lexical level**, determining how **characters** form **tokens**;
> - **Phrases** – the **grammar level**, narrowly speaking, determining how **tokens** form **phrases**;
> - **Context** – determining what objects or variables names refer to, if types are valid, etc.
>
> Distinguishing in this way yields modularity, allowing each level to be described and processed separately and often independently. First, a lexer turns the linear sequence of characters into a linear sequence of [tokens](<https://en.wikipedia.org/wiki/Token_(parser)>); this is known as "lexical analysis" or "[lexing](https://en.wikipedia.org/wiki/Lexical_analysis)". Second, the parser turns the linear sequence of tokens into a hierarchical syntax tree; this is known as "[parsing](https://en.wikipedia.org/wiki/Parsing)" narrowly speaking. Thirdly, the contextual analysis resolves names and checks types.
>
> Source: [Wikipedia](<https://en.wikipedia.org/wiki/Syntax_(programming_languages)>)

ES6 has a very detailed definition for each case and you're strongly encouraged to take a look at it sooner rather than later.

- [ECMAScript Language: Lexical Grammar](https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-lexical-grammar)
- [Syntactic and Lexical Grammar](https://www.ecma-international.org/ecma-262/6.0/#sec-syntactic-and-lexical-grammars)

Some extra info can be found at [MDN - JavaScript Lexical Grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar) and extra generic info at [Wikipedia - Syntax](<https://en.wikipedia.org/wiki/Syntax_(programming_languages)>), [Wikipedia - Lexical Grammar](https://en.wikipedia.org/wiki/Lexical_grammar) and [Wikipedia - JavaScript Syntax](https://en.wikipedia.org/wiki/JavaScript_syntax) ... but I warn you, the rabbit hole is deeper than you can imagine, and you might lose your mind along the way :P

### Statements

Let's start with the general definition.

> In computer programming, a statement is a syntactic unit of an imperative programming language that expresses some action to be carried out. A program written in such a language is formed by a sequence of one or more statements. A statement may have internal components (e.g., [expressions](<https://en.wikipedia.org/wiki/Expression_(computer_science)>)).
>
> Source : [Wikipedia](<https://en.wikipedia.org/wiki/Statement_(computer_science)>)

Ok that's hard, let's have some help from Kyle Simpson

> In a computer language, a group of words, numbers, and operators that performs a specific task is a statement.
>
> Source: [YDKJS - Up & Going - 1st edition](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20%26%20going/ch1.md#statements)

Now that's better!

JavaScript is quite an expressive language with a nice set of statement categories in it's toolkit.

> The appearance of statements shapes the look of programs. Programming languages are characterized by the type of statements they use (e.g. the curly brace language family). Many statements are introduced by identifiers like `if`, `while` or `repeat`. Often statement keywords are reserved such that they cannot be used as names of variables or functions. Imperative languages typically use special syntax for each statement, which looks quite different from function calls.
>
> Source: [Wikipedia](<https://en.wikipedia.org/wiki/Statement_(computer_science)#Syntax>)

Here some categories:

- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Control_flow)
  > Determine the flow of a program
- [Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Declarations)
  > Describes an [identifier/token](https://en.wikipedia.org/wiki/Identifier#In_computer_languages) ( A lexical token or simply token is a string with an assigned and thus identified meaning [\*](https://en.wikipedia.org/wiki/Lexical_analysis#Token) ) and optionally initializing it to a value.
- [Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Iterations)
  > Iteration is the repetition of a process in order to generate a (possibly unbounded) sequence of outcomes. The sequence will approach some end point or end value. Each repetition of the process is a single iteration, and the outcome of each iteration is then the starting point of the next iteration.
  > Source: [Wikipedia](https://en.wikipedia.org/wiki/Iteration)
- [Function/Classes related statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Functions_and_classes)
  > A function/Subroutine is a sequence of program instructions that performs a specific task, packaged as a unit. This unit can then be used in programs wherever that particular task should be performed.
  > Source: [Wikipedia](https://en.wikipedia.org/wiki/Subroutine)
  >
  > A class is an extensible program-code-template for creating objects
  > Source: [Wikipedia](<https://en.wikipedia.org/wiki/Class_(computer_programming)>)

You can peek at the [ECMA Declarations and the Variable Statement](https://www.ecma-international.org/ecma-262/6.0/#sec-declarations-and-the-variable-statement) definition to have an example of the level of details.
We're not going into that right now though, but we will during this course.

### Expressions

> An expression in a programming language is a combination of one or more `constants`, `variables`, `operators`, and `functions` that the programming language interprets (according to its particular rules of precedence and of association) and computes to produce ("to return", in a stateful environment) another value. This process, as for mathematical expressions, is called **evaluation**.
>
> Source: [Wikipedia](<https://en.wikipedia.org/wiki/Expression_(computer_science)>)

Interesting to take in consideration that:

> In most languages, **statements** contrast with **expressions** in that statements do not return results and are executed solely for their side effects, while expressions always return a result and often do not have side effects at all.
> Source: [Wikipedia](<https://en.wikipedia.org/wiki/Statement_(computer_science)#Expressions>)

Also interesting to see how Kyle Simpson explains that the simple statement

```javascript
a = b * 2;
```

is built by [4 simpler expressions](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20%26%20going/ch1.md#expressions).

You can learn more from his [YDKJS - Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#statements--expressions) book online, also take a look at a particularly little known characteristic that [all Statements have Completion Values](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#statement-completion-values) ( yup, as many of us I learned this quite late :,( )

### Semantics

So far most of the definitions and examples could be fairly understood going from left-to-right based on the **form** ( **syntax** ) but as every language, several syntactically similar structures might mean different things depending on the context, and that **meaning** are ruled by the [semantics](<https://en.wikipedia.org/wiki/Semantics_(computer_science)>).

Again Kyle Simpson provides an awesome example of [Contextual Rules](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#contextual-rules) especially for the case of the [Curly Braces](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch5.md#blocks) which is shockingly simple that scares.

## ECMAScript Types

> Algorithms within this specification manipulate values each of which has an associated type. The possible value types are exactly those defined in this clause. Types are further subclassified into ECMAScript language types and specification types.
>
> An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are **`Undefined`, `Null`, `Boolean`, `String`, `Symbol`, `Number`, and `Object`**. An ECMAScript language value is a value that is characterized by an ECMAScript language type.
>
> Source: [ECMA International](https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

Now let's destroy another myth.

> **[MYTH]** JavaScript doesn't have types

In order to bust that myth the only thing we need is to carefully read the spec! One word is repeated several times and it's "**value**"!  
Why is that so important? Because in JavaScript, TYPES is all about VALUES, it doesn't matter the name of an identifier, nor the way you initialized your variable, neither the initial type of the value you assigned to the variable. The TYPE will, ultimately be determined at runtime and if needed it will be [transformed implicitly into another type](http://www.ecma-international.org/ecma-262/6.0/#sec-type-conversion), if needed, in order to operate with that value consistently. The latter mechanism is called [coercion](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch4.md) and we'll explain it later today.

It's said to be "[weak-typed](https://en.wikipedia.org/wiki/Programming_language#Weak_and_strong_typing)" but I find "[dynamically-typed](https://en.wikipedia.org/wiki/Programming_language#Static_versus_dynamic_typing)" more expressive.

### Value type groups

ES2015 standard defines eight data types organized in two groups.

#### [Primitives](https://en.wikipedia.org/wiki/Primitive_data_type)

- [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)
- [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)
- [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type)
- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#BigInt_type) ( it's still a [Stage 3 proposal](https://github.com/tc39/proposal-bigint) but Chrome already supports it and Firefox and Safari are underway. )
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type) ( new in ES6! )

#### [Composite/Compound](https://en.wikipedia.org/wiki/Composite_data_type)

- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects)

Bibliography related to ECMAScript types is huge, sometimes too cryptic, sometimes too light, and unfortunately many times confusing when not inaccurate. As you might already understand, one of my favorites is Kyle Simpson, in one of his books there's a chapter dedicated to types which covers most of them ad exception of [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#BigInt_type) which came out after his first edition. Let's jump into [YDKJS: Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch1.md#built-in-types)

### Type Conversion

In order to be able to dynamically convert the type of a value during evaluation, both explicit ( intentional "casting" ) or implicit ( automatic coercion ) conversion will use the same mechanism.
E.g. If the value is an `object` and the operation requires a `primitive` output, it'll look for the appropriate method [toPrimitive](http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive) which will convert its input argument to a non-Object type. If an object is capable of converting to more than one primitive type, it may use the optional hint PreferredType to favour that type. If it's a `primitive` and an `object` is needed, it will do all of the [ToObject](http://www.ecma-international.org/ecma-262/6.0/#sec-toobject) abstract operations in order to perform the required transformation and eventually return a [Primitive wrapper object](https://developer.mozilla.org/en-US/docs/Glossary/Primitive#Primitive_wrapper_objects_in_JavaScript) aka [Boxing Wrapper](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch3.md#boxing-wrappers).

Several things might go wrong during this conversion and all such cases are laid out in the spec, but since specs, sometimes are hard to follow, I'd love to show you some practical examples from [YDKJS: Types & Grammar - Natives](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch3.md#chapter-3-natives)

Since implicit conversion, called **coercion** is one of the most misunderstood characteristics of JavaScript, let's have a read at [YDKJS: Types & Grammar - Coercion](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch4.md#chapter-4-coercion)

## Operators

Generic definition

> Programming languages typically support a set of operators: constructs which behave generally like functions, but which differ syntactically or semantically from usual functions. Common simple examples include arithmetic (addition with +), comparison (with >), and logical operations (such as AND or &&). More involved examples include assignment (usually = or :=), field access in a record or object (usually .), and the scope resolution operator (often :: ).
>
> Source: [Wikipedia](<https://en.wikipedia.org/wiki/Operator_(computer_programming)>)

What does ECMAScript have to say about it?

> ECMAScript defines a set of built-in operators. ECMAScript operators include various unary operations, multiplicative operators, additive operators, bitwise shift operators, relational operators, equality operators, binary bitwise operators, binary logical operators, assignment operators, and the comma operator.
>
> Source: [ECMA International](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-overview)

Let's have an overview at [MDN Web Docs - Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

- [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment)
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)
- [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic)
- [Bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic)
- [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical)
- [String operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String)
- [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Conditional)
- [Comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comma)
- [Unary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Unary)
- [Relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational)

Interesting to know:

> Some ECMAScript operators deal only with integers in specific ranges such as −231 through 231−1, inclusive, or in the range 0 through 216−1, inclusive. These operators accept any value of the Number type but first convert each such value to an integer value in the expected range.
>
> Source: [ECMA International](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types-number-type)

Another noteworthy feature introduced on ES6 is the [Destructuring Assignment](http://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment). We're gonna get deeper into it later on this course but to have an appetizer :P let's see some examples at [MDN - Expressions - Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

If you want to dive into how operators are defined by the spec, there's a complete section dedicated to the [ECMAScript Language: Expressions](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-expressions) or you can take a look at section 12 of the [Table of contents](http://www.ecma-international.org/ecma-262/6.0/#contents)to check them individually.

### Operators precedence

Just like in math, in computer programming there's a set of rules or conventions to define which procedure to perform first in order to evaluate an expression. Depending on the order we might have different results.
Javascript is not an exception and we can see this table very well explained at [MDN web Docs - Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).

### The case of the ... ( spread/rest "operator" )

A new syntactic element was introduced in ES6 but surprisingly it's not listed as part of the operators but rather as a left-hand-side expression, specifically an assignment expression.

You can search for **SpreadElement** on the [spec](http://www.ecma-international.org/ecma-262/6.0/) to see how it behaves depending on the context.

A clearer approach can be found on MDN

- [Left-hand-side expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Left-hand-side_expressions)
- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

And we can find some interesting insights at Kyle Simpson's [YDKJS Edition 1 - ES6 & Beyond - Chapter 2](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch2.md#spreadrest)

As you can see, even though the documentation and the naming is quite awkward, it opens a new world of capabilities and really makes our lives easier when you start mastering it.

---

[Go back to DAY 1](/day_01.md) or [Go next to DAY 3](/day_03.md)

---

[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-2)
