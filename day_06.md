# [A walk in JavaScript](/README.md)

## DAY 6

- Functions
  - General Definition
  - Function declaration (function statement)
  - Function expression
  - Function constructor
  - Constructor vs declaration vs expression
  - Properties of the Function object in the prototype chain
  - Arity & formal parameters
  - Formal parameters and the `arguments` thing
  - Functions as properties of an object
  - IIFE
  - Pure functions
  - Side Effects
- Execution context
  - Types of Execution Context (executable code)
  - Execution Stack
  - How Execution Context is defined?
  - Articles and books used for this section
- Scope
  - Part of a program
  - ECMAScript definition
  - General definitions
  - Examples
- Hoisting
- Closure
  - General definition
  - Examples
- Can we Cheat Scope?
  - ev[a|i]l
  - with
- Relative Concepts Readings
- Preliminary practice
- Exercises

## Functions

### General definition

Let's start with a general definition to understand what a function is:
> In computer programming, a subroutine is a sequence of program instructions that performs a specific task, packaged as a unit. This unit can then be used in programs wherever that particular task should be performed.
>
> Subprograms may be defined within programs, or separately in libraries that can be used by many programs. In different programming languages, a subroutine may be called a **procedure**, a **function**, a **routine**, a **method**, or a **subprogram**. The generic term **callable unit** is sometimes used.
>
> Source: [Wikipedia](https://en.wikipedia.org/wiki/Subroutine)

Nice, we now know that a `function` might contain instructions to do something and is "callable".

We also know from our previous lessons that a `function` is a [Function Object](https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects) with a complex definition:

> ECMAScript function objects encapsulate parameterized ECMAScript code closed over a lexical environment and support the dynamic evaluation of that code. An ECMAScript function object is an ordinary object and has the same internal slots and the same internal methods as other ordinary objects. The code of an ECMAScript function object may be either strict mode code (10.2.1) or non-strict mode code. An ECMAScript function object whose code is strict mode code is called a strict function. One whose code is not strict mode code is called a non-strict function.
>
> Source: [ECMAScript International](https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects)

Lots of terms are completely obscure at this time, but we will shed light on them as the day continues.

Now let's see if MDN has something more to say:

> In JavaScript, functions are **first-class objects**, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects.
> Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

That's a great reminder of something important. In JS, functions are [first-class citizens](https://en.wikipedia.org/wiki/First-class_citizen), therefore they can:

- be assigned to a variable
- be formal parameters of a function
- be returned as result of a function
- be tested for equality ( therefore implicitly they can be modified )

Now let's start digging with the following topics:

### Function declaration (function statement)

A  function declaration or function statement defines a function with a name and arbitrary number of specified parameters. It might or might not contain statements on its body and it'll implicitly `return` `undefined` unless an explicit value is defined on the `return ...;` statement.

```javascript
function name([param[, param,[..., param]]]) {
   [statements]
}
```

See [MDN Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#The_function_declaration_(function_statement))
  
### Function expression

A function declaration can be defined inside an expression like a assignment expression where the function is assigned as a value for a given variable. In the case of a function expression the name of the function can be omitted resulting in two variants, **named function expression** or **anonymous function expression**; the differences between the two are significant and we'll see them soon.

```javascript
var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
```

See [MDN Function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#The_function_expression_(function_expression))

### Function constructor

> Function objects created with the Function constructor are parsed when the function is created. This is less efficient than declaring a function with a function expression or function statement and calling it within your code because such functions are parsed with the rest of the code.
>
> Source: [MDN Function Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Description)

```javascript
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

See [MDN Function constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Syntax)

### Constructor vs declaration vs expression

Even though they will end up producing a function, there are several differences between them, some subtle and some coarse.
Let's see some examples in [MDN - Constructor vs declaration vs expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#Constructor_vs._declaration_vs._expression)

### Properties of the Function object in the prototype chain

As we've already learned, a `function` is an `object`, therefore it benefits from the `prototype` chain defined properties, which can be any of the ECMAScript types we know.
Let's take a look at [MDN - Function prototype object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Function_prototype_object)

### Arity & formal parameters

[Arity](https://en.wikipedia.org/wiki/Arity) is the term used to describe the number of `arguments` a function or operation accepts. They can be described as nullary (0 arguments), unary (1), binary (2) and so on.

Intrinsically, functions in JavaScript are [variadic](https://en.wikipedia.org/wiki/Variadic_function) ( a.k.a [multigrade](https://en.wikipedia.org/wiki/Plural_quantification#Multigrade_(variably_polyadic)_predicates_and_relations), n-ary, polyadic ...), it means that even though you can define the `formal parameters` at function declaration time, it will accept AND handle less or more `arguments`. That opens a whole world of interesting implementations.

Example from [Wikipedia - Variadic function in Javascript](https://en.wikipedia.org/wiki/Variadic_function#In_Javascript)

```javascript
function add(n, i) {
    return n + i;
}

function sum(...numbers) {
    return numbers.reduce(add);
}

sum(1, 2, 3) // 6
sum(3, 2, 1) // 6
```

Example of LHS and RHS analysis

```javascript

/**
 * How many LHS look-ups can you see?
 * How many RHS look-ups can you see?
 */

function speakToMe(input) {
    var helperVal = input;
    return input + helperVal;

}

var result = speakToMe( 10 );

```

### Formal parameters and the `arguments` thing

Did you note something weird about those terms `arguments` and `parameters` that seem to be interchangeable but ... not quite? Well, you're not alone. It turns out they ARE kinda vague, so for clarity well see a couple of definitions here:

> In computer programming, a parameter or a formal argument, is a special kind of variable, used in a subroutine to refer to one of the pieces of data provided as input to the subroutine. These pieces of data are the values of the arguments (often called actual arguments or actual parameters) with which the subroutine is going to be called/invoked.
> ...
> Unlike argument in usual mathematical usage, the argument in computer science is thus the actual input expression passed/supplied to a function, procedure, or routine in the invocation/call statement, whereas the parameter is the variable inside the implementation of the subroutine.
>
> Source: [Wikipedia - Parameter](https://en.wikipedia.org/wiki/Parameter_(computer_programming))

> In mathematics, an argument of a function is a specific input to the function; it is also called an independent variable.
>
> Source: [Wikipedia - Argument](https://en.wikipedia.org/wiki/Argument_of_a_function)

In short, the `parameters` are the **signature**, or the variables you define at **function declaration time**, and the `arguments` are the `values` you pass to the function at **function call time**.

That said, `arguments` itself has a special meaning in JavaScript. Now let's see more about how JavaScript handles arguments, provides a new way in ES6 to handle those arguments in a consistent way, and provides a feature to define default values for the formal parameters (like other languages do)

- [The `arguments` thing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Using_the_arguments_object) ( deprecated 👎)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

### Functions as properties of an object

We've learned the concept of [first-class citizens](https://en.wikipedia.org/wiki/First-class_citizen), therefore we can assign a function to a variable .... what if that variable happens to be an object property?
Now we're talking, we could create an object with many values of any ECMAScript valid type, including functions, that might manipulate values of the same or other objects!!! These functions are sometimes called "methods" but that might be a controversial statement. (the door for Object Oriented Programming has been opened)

Let's get some insights from [MDN - Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Method_definitions)

### IIFE

Do you remember what an [expression](https://en.wikipedia.org/wiki/Expression_(computer_science)) is? Now what if I tell you there's a particular expression that let's you declare a function in an expression that immediately executes that function?
Many JavaScripts common patterns are built around that feature called **Immediately Invoked Function Expression** best known by its acronym [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

```javascript

// not very useful but clear

(function(){
  alert(`I'm a teapot`);
}())

```

### Pure Functions

> Hey function, you shouldn't change anything, you should only accept data and return new data, that's it.

Behind that simplicity there's a whole paradigm called functional programming. Let's take a look a those concepts.

- [Pure Function](https://en.wikipedia.org/wiki/Pure_function)
- [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)

```javascript

let a = [1, 2, 3, 4, 5];
let b = a.map( i => i+1);

console.log(a); // [1, 2, 3, 4, 5]
console.log(b); // [2, 3, 4, 5, 6]

```

### Side Effects

> Hey function you can **explicitly** (because I told you so) or **implicitly** (because someone told you so, even without knowing they told you so) **change** everything you can get your claws into, even without letting anyone know about that.

Scary huh? But also powerful, it all depends on the agreement you have with the rest of the engineers (scary huh ? :P). That said, a whole world of paradigms rest on top of that [Side Effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) thing, like [Imperative programming](https://en.wikipedia.org/wiki/Imperative_programming)

```javascript

// a compendium or WRONG STAFF

var a = [1, 2, 3, 4, 5];
var b = [];

a.forEach((v,i) => {
  b[i] = ++a[i];
});

console.log(b); // [2, 3, 4, 5, 6] NICE!!!
console.log(a); // [2, 3, 4, 5, 6] OOPS! we changed it!!!

```

---

## Execution Context

> See [Execution Context](http://www.ecma-international.org/ecma-262/6.0/#sec-execution-contexts) documentation

> 👎 Execution context != context (aka `this`)  
> 👍 Execution context ~ scope

### Types of Execution Context _(executable code)_

> See [Types of Source Code](http://www.ecma-international.org/ecma-262/6.0/#sec-types-of-source-code)

- [Global code](http://www.ecma-international.org/ecma-262/6.0/#sec-global-environment-records)
- [Function code](http://www.ecma-international.org/ecma-262/6.0/#sec-function-environment-records)
- [eval code](http://www.ecma-international.org/ecma-262/6.0/#sec-eval-x)

### Execution Stack

- Starts with global
- Usually LIFO but not necessarily
    > Evaluation of code by the running execution context may be suspended at various points defined within this specification. Once the running execution context has been suspended a different execution context may become the running execution context and commence evaluating its code. At some later time a suspended execution context may again become the running execution context and continue evaluating its code at the point where it had previously been suspended. Transition of the running execution context status among execution contexts usually occurs in stack-like last-in/first-out manner. However, some ECMAScript features (ES6) require **non-LIFO transitions of the running execution context**.

    Anyone in the audience wants to bring an example of non-LIFO activation record transition feature?

## How Execution Context is defined?

### Creation Phase

- [LexicalEnvironment](http://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments) component creation.  
  > Identifies the Lexical Environment used to resolve identifier references made by code within this execution context.

  - [Environment Record](http://www.ecma-international.org/ecma-262/6.0/#sec-environment-records)
    - [Declarative Environment Records](http://www.ecma-international.org/ecma-262/6.0/#sec-declarative-environment-records)  

        > Each declarative Environment Record is associated with an ECMAScript program scope containing variable, constant, let, class, module, import, and/or function declarations. A declarative Environment Record binds the set of identifiers defined by the declarations contained within its scope.

      - `Variable` declaration
        - `let`, `const` [let and const declaration](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations)
      - `Function` declaration
        - `arguments`
    - [Object Environment Records](http://www.ecma-international.org/ecma-262/6.0/#sec-object-environment-records)  

        > Each object Environment Record is associated with an object called its binding object. An object Environment Record binds the set of string identifier names that directly correspond to the property names of its binding object. Property keys that are not strings in the form of an IdentifierName are not included in the set of bound identifiers. Both own and inherited properties are included in the set regardless of the setting of their `[[Enumerable]]` attribute. Because properties can be dynamically added and deleted from objects, the set of identifiers bound by an object Environment Record may potentially change as a side-effect of any operation that adds or deletes properties. Any bindings that are created as a result of such a side-effect are considered to be a mutable binding even if the Writable attribute of the corresponding property has the value false. Immutable bindings do not exist for object Environment Records.  

  - Reference to the outer environment,
  - `this` binding.  

    > The value associated with the `this` keyword within ECMAScript code associated with `this` execution context.

- `VariableEnvironment` component creation.  

    > Identifies the Lexical Environment whose environment record holds bindings created by VariableStatements and FunctionDeclarations within this execution context.  
    > `var`  [var declaration](http://www.ecma-international.org/ecma-262/6.0/#sec-variable-statement)

### Execution Phase

> example taken from:
> [Understanding Execution Context and Execution Stack in Javascript. (by Sukhjinder Arora)](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)

#### 0 - The code

```javascript
let a = 20;

const b = 30;

var c;

function multiply(e, f) {
 var g = 20;
 return e * f * g;
}

c = multiply(20, 30);

```

#### 1 - Global context creation

```javascript
// (PSEUDO-CODE)

GlobalExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      a: < uninitialized >,
      b: < uninitialized >,
      multiply: < func >
    }
    outer: <null>,
    ThisBinding: <Global Object>
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      c: undefined,
    }
    outer: <null>,
    ThisBinding: <Global Object>
  }
}
```

#### 2 - Global execution

```javascript
// (PSEUDO-CODE)

GlobalExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      a: 20,
      b: 30,
      multiply: < func >
    }
    outer: <null>,
    ThisBinding: <Global Object>
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      c: undefined,
    }
    outer: <null>,
    ThisBinding: <Global Object>
  }
}
```

#### 3 - `multiply`  context creation

```javascript
// (PSEUDO-CODE)

FunctionExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // Identifier bindings go here
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>,
    ThisBinding: <Global Object or undefined>,
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // Identifier bindings go here
      g: undefined
    },
    outer: <GlobalLexicalEnvironment>,
    ThisBinding: <Global Object or undefined>
  }
}
```

#### 4 - `multiply` execution

```javascript
// (PSEUDO-CODE)

FunctionExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // Identifier bindings go here
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>,
    ThisBinding: <Global Object or undefined>,
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // Identifier bindings go here
      g: 20
    },
    outer: <GlobalLexicalEnvironment>,
    ThisBinding: <Global Object or undefined>
  }
}
```

### Articles and books used for the "execution context" section

- Standard ECMA-262
  - [ES5 execution context](http://ecma-international.org/ecma-262/5.1/#sec-10.3)
  - [ES6 execution context](http://www.ecma-international.org/ecma-262/6.0/#sec-execution-contexts)
- Harold Abelson and Gerald Jay Sussman with Julie Sussman
  - [SICP: chapter 5.5.6 Lexical Addressing](https://web.mit.edu/alexmv/6.037/sicp.pdf)
- Dmitry Soshnikov
  - [execution-contexts](http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/)
  - [variable-object](http://dmitrysoshnikov.com/ecmascript/chapter-2-variable-object/)
  - [lexical-environments-common-theory](http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/)
  - [lexical-environments-ecmascript-implementation](http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-2-lexical-environments-ecmascript-implementation/)
- Michael McMillan
  - [An easy intro to Lexical Scoping in JavaScript](https://medium.freecodecamp.org/lexical-scoping-in-javascript-e876cd221b74)
- Sukhjinder Arora
  - [Understanding Execution Context and Execution Stack in Javascript.](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)
- Rupesh Mishra
  - [Execution context, Scope chain and JavaScript internals](https://hackernoon.com/execution-context-in-javascript-319dd72e8e2c)
- Bilal Alam
  - [Javascript Scope Chain and Execution Context simplified](https://medium.com/koderlabs/javascript-scope-chain-and-execution-context-simplified-ffb54fc6ad02)

---

## Scope

> **REMINDER**  
> DO NOT CONFUSE "scope" with "context"

### Define Scope

> Scope is the **"part of the program"** where a [Name Binding](https://en.wikipedia.org/wiki/Name_binding) is valid.

### "Part of a program" meaning

#### WHEN defined at **RUN-TIME** ( Dynamic Scope )

> "Dynamic scoping does not care how the code is written, but instead how it executes. Each time a new function is executed, a new scope is pushed onto the stack. This scope is typically stored with the function’s call stack. When a variable is referenced in the function, the scope in each call stack is checked to see if it provides the value."
>
> Source: [Lua](https://leafo.net/guides/dynamic-scoping-in-lua.html)

Late binding, non-optimizable at compile time

#### WHEN defined at **LEX-TIME** ( Lexical Scope )

> "The scope of a quantity is the set of statements and expressions in which the declaration of the identifier associated with that quantity is valid."
>
> Source: [Algol60](https://www.masswerk.at/algol60/report.htm#2_7)

Early binding, optimizable at compile time  
JavaScript use this scope paradigm

### ECMAScript definitions

- [Lexical Environment](http://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments)

### General definitions:

- [MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [Wikipedia - Scope](https://en.wikipedia.org/wiki/Scope_(computer_science))

#### Examples

```javascript
/**
 * REMEMBER
 * In JavaScript a variable can't have a reference to another variable!!!! IT'S ALL ABOUT VALUES!!!!
 *
 * A value can be assigned to a variable in two ways
 *      BY VALUE -> for primitives -> the data is duplicated and then the variable points to that new duplicated data
 *          var a = 2;
 *          var b = a; -> a new numeric data is created and b will point to this new data
 *                        there's no relationship between the 2 of a and the 2 of b
 *
 *      BY REFERENCE -> for compound (objects) -> the variable points the the data
 *          var a = {x: 3};
 *          var b = a; -> there's no reference from b to a,
 *                        the references if from that both a and b point to the same object in memory { x:3 }
 *
 *                        It means if we modify the actual object { x:3 } by adding or removing information, all identifiers will
 *                          be still linked to the same data which has changed. Instead of we reassign the identifier data or redefine the identifier,
 *                          the data will be accessible through any remaining identifier pointing to it otherwise it'll be garbage collected
 *
 * Below a simple verification
 */

// Synchronous modification

var a = { x:3 };
var b = a;
a = { n:8 };

console.log(a); // -> {n: 8}
console.log(b); // -> {x: 3}

// Asynchronous modification
var c = { x:3 };
var d = c;

// will see asynchronous programming and arrow functions later
setTimeout(() => c = { x:4 }, 1000);
setTimeout(() => console.log(c), 2000); // -> {x: 4}
setTimeout(() => console.log(d), 3000); // -> {x: 3}

```

```javascript
/**
 * explain scope of:
 *  a
 *  b
 *  c
 *  d
 *
 *  what is TDZ in ES6?
 */
function n ( z ) {
    a = 3;
    var b = 4;

    {
        var c = 5;
        let d = 7;
    }
}

```

```javascript
/**
 *
 */
(function(){
  var a = b = 3;
})();

console.log(a); // what will it print?
console.log(b); // and this?

```

---

## Hoisting

Hoisting is a concept described by [Douglas Crockford](https://crockford.com/about.html) many years ago, way before ES6 was even close to be dreamed. That concept was particularly significant in ECMAScript < 5.x and ES6 introduced a couple of changes in the syntax that directly affects how that concept is defined.
Kyle Simpson dedicated a full section for that and, truly, there's no better explanation I can share with you than that.

Let's see [YDKJS - Scope & Closures - Hoisting](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch4.md)

---

## Closure

> "A closure is the combination of a function and the lexical environment within which that function was declared."
>
> Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

> "In programming languages, a closure, also lexical closure or function closure, is a technique for implementing lexically scoped name binding in a language with first-class functions. Operationally, a closure is a record storing a function together with an environment.The environment is a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created. Unlike a plain function, a closure allows the function to access those captured variables through the closure's copies of their values or references, even when the function is invoked outside their scope."
>
> Source: [Wikipedia](https://en.wikipedia.org/wiki/Closure_(computer_programming))

> "In computer science, a closure (also lexical closure, function closure, function value or functional value) is a function together with a referencing environment for the non-local variables of that function. A closure allows a function to access variables outside its typical scope. Such a function is said to be "closed over" its free variables. The referencing environment binds the non-local names to the corresponding variables in scope at the time the closure is created, additionally extending their lifetime to at least as long as the lifetime of the closure itself. When the closure is entered at a later time, possibly from a different scope, the function is executed with its non-local variables referring to the ones captured by the closure."
>
> Source: [Enacademic](https://enacademic.com/dic.nsf/enwiki/39434)

### General Definition

- [Wikipedia - Closure](https://en.wikipedia.org/wiki/Closure_(computer_programming))

```javascript
/**
 * CLOSURE example from wikipedia
 * @see https://en.wikipedia.org/wiki/Closure_(computer_programming)#Lexical_environment
 *
 * in ECMAScript
 */

function foo() {
  let x;
  let f = function() { return ++x; };
  let g = function() { return --x; };
  x = 1;
  alert('inside foo, call to f(): ' + f());
  return {f,g}
}

let { f, g } = foo();  // 2

alert('call to g(): ' + g());  // 1 (--x)
alert('call to g(): ' + g());  // 0 (--x)
alert('call to f(): ' + f());  // 1 (++x)
alert('call to f(): ' + f());  // 2 (++x)

/**
 * Function foo and the closures referred to by variables f and g all use the same relative memory location signified by local variable x.
 *
 * In some instances the above behavior may be undesirable, and it is necessary to bind a different lexical closure.
 * Again in ECMAScript, this would be done using the Function.bind(). We'll see `bind` later.
 */

```

---

## Relative Concepts Readings

- [Name Binding](https://en.wikipedia.org/wiki/Name_binding)
- [Identifier](https://en.wikipedia.org/wiki/Identifier)
- [Local Scoped Variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [Global Scoped Variable](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)
- [Block Scoped Variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [First Class Citizen](https://en.wikipedia.org/wiki/First-class_citizen)
- [Higher order function](https://en.wikipedia.org/wiki/Higher-order_function)
- [Garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))
- [Free variables and bound variables](https://en.wikipedia.org/wiki/Free_variables_and_bound_variables)
- [Domain of discourse](https://en.wikipedia.org/wiki/Domain_of_discourse)
- [Referential transparency](https://en.wikipedia.org/wiki/Referential_transparency)
- [Side effect](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
- [Function pointer](https://en.wikipedia.org/wiki/Function_pointer)

---

## Can we cheat scope?

"Abandon all hope who enter here"

### Ev[a|i]l

Modifying the lex-time defined scope dynamically

```javascript

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
 *
 */

function cheat(a, b, c) {
    // 'use strict'; // <- what if we use strict mode? ( we'll see strict mode details on day 7 )
    eval(a);
    console.log(b + c);
}

cheat('var c = 7', 10, 5); // <- what if we omit the var statement?
```

```javascript

function cheatAgain(a, b) {
    // 'use strict'; // <- what if we use strict mode? ( we'll see strict mode details on day 7 )
    eval(a);
    console.log(b + c);
}

var c = 5;

cheatAgain('var c = 7', 10); // <- what if we omit the var statement?

```

### with

Creating a lexical scope at run-time

```javascript

/**
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with
 *
 */

var a = {
    b: 2
};

var a1 = {
    c: 3
}

with(a){
   b = 3;
}

with(a1){
   b = 4;
}

console.log(a);
console.log(a1); // <- oops
console.log(b); // <- what?!!!


```

```javascript
'use strict';
with (Math){x = cos(2)};
```

### Other

- A great analysis of a memory leak example related to inaccurate use of closures [See here](http://point.davidglasser.net/2013/06/27/surprising-javascript-memory-leak.html)
- The best and most detailed book I've ever read about scope and closures in JS [You Don't Know JS: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/scope%20%26%20closures)

### Preliminary Practice

Now let's have some time to practice. Here a list of resources we can use:

- [W3resources exercises](https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php)
- [W3School](https://www.w3schools.com/js/js_functions.asp)
- [W3School](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1)

## Exercises

Let's open our test files:

- [Functions](/src/day_06/functions.test.js)
- [Scope](/src/day_06/scope.test.js)
- [Hoisting](/src/day_06/hoisting.test.js)
- [Closure](/src/day_06/closure.test.js)

Now open your terminal.

1. Make sure you're at the project location
2. If you didn't install all the packages yet the run `npm i` for a fresh dependency install, or `npm ci` for an installation based on the lock file.
3. Type `npm run test:watch`, this will start running your tests every time you make a change.

**Our task is to make ALL our DAY 6 tests pass ;)**

***
[Go back to DAY 5](/day_05.md) or [Go next to DAY 7](/day_07.md)
***
[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-6)