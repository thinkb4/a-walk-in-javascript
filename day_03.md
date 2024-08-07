# [A walk in JavaScript](/README.md)

## DAY 3

- Objects explained
  - Objects, the big picture
  - Syntax
  - Object properties attributes (accessors, descriptors)
  - Prototype
  - Behavior Delegation
  - Exotic Objects
  - Object built-in methods
  - Standard built-in objects

## Objects, the big picture

First we went through an introduction of the language, then we jumped into the syntax, grammar and types where we realized that "not everything in javascript is an object!", Primitives are not objects and they're immutable! and we also noted Object type in JS has many flavors ( aka sub-types ), but ... what's an object? what can we do with them? what are they for?

Let's try to get some insight from the documentation available online starting with the first occurrence on the ECMA2015 spec.

> Even though ECMAScript includes syntax for class definitions, ECMAScript objects are not fundamentally class-based such as those in C++, Smalltalk, or Java. Instead objects may be created in various ways including via a literal notation or via constructors which create objects and then execute code that initializes all or part of them by assigning initial values to their properties. Each constructor is a function that has a property named "prototype" that is used to implement prototype-based inheritance and shared properties.
>
> Source: [ECMA International](http://www.ecma-international.org/ecma-262/6.0/#sec-objects)

That one was kinda harsh and confusing as the first mention, ain't it? Even though it has some very important information we'll see later on related to the prototype but we're not quite there yet!!

Let's try with the second mention

> An object is a collection of properties and has a single prototype object. The prototype may be the null value.
>
> Source: [ECMA International](http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-object)

That's a little better, some light starts raising in our horizon, but again, not very clear.

What about the third one?

> An Object is logically a collection of properties. Each property is either a data property, or an accessor property:
>
> - A *data property* associates a key value with an [ECMAScript language value](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types) and a set of Boolean attributes.
>
> - An *accessor property* associates a key value with one or two accessor functions, and a set of Boolean attributes. The accessor functions are used to store or retrieve an [ECMAScript language value](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types) that is associated with the property.
>
> Properties are identified using key values. A property key value is either an ECMAScript String value or a Symbol value. All String and Symbol values, including the empty string, are valid as property keys. A *property name* is a property key that is a String value.
> ...
> Property keys are used to access properties and their values. There are two kinds of access for properties: ***get*** and ***set***, corresponding to value retrieval and assignment, respectively. The properties accessible via get and set access includes both ***own properties*** that are a direct part of an object and ***inherited properties*** which are provided by another associated object via a property inheritance relationship. Inherited properties may be either own or inherited properties of the associated object. Each own property of an object must each have a key value that is distinct from the key values of the other own properties of that object.
>
> All objects are logically collections of properties, but there are multiple forms of objects that differ in their semantics for accessing and manipulating their properties. ***Ordinary objects*** are the most common form of objects and have the default object semantics. An ***exotic object*** is any form of object whose property semantics differ in any way from the default semantics.
>
> Source: [ECMA International](http://www.ecma-international.org/ecma-262/6.0/#sec-object-type)

**Now we're talking!!!**

Great, now we know this:

- Objects are collections of properties,
- Properties come in 2 flavors
  - data property
  - accessor property
- Properties identifiers ( keys ) come in 2 flavors
  - [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
    > Note that even when using variables for [Computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names), unless they're symbols, they will be ultimately converted into their string representation which might end up overwriting an existent property ( e.g. resulting in `[object Object]` by using two different variables containing 2 different objects )
  - [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type)
    > No overwriting is happening unless you use a variable containing the same symbol (*Symbols are out of this course's scope but you can read more [here](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch7.md#well-known-symbols)*)
- Property values can be of any valid ECMAScript type ( including objects and all subtypes of object )
- Properties have hierarchy
  - [Own properties](http://www.ecma-international.org/ecma-262/6.0/#sec-own-property)
    > those defined at the current object level
  - [Inherited properties](http://www.ecma-international.org/ecma-262/6.0/#sec-inherited-property)
    > those defined at any higher level of the "inheritance" chain ( [prototype](http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-prototype) chain ), and like a Matryoshka, we could have many nested levels and even circular references!!!
- Objects have sub-types
- Objects come in 4 flavors and they can belong to more than one flavor at a time
  - [Ordinary](http://www.ecma-international.org/ecma-262/6.0/#sec-ordinary-object-internal-methods-and-internal-slots)
    > object that has the default behavior for the essential internal methods that must be supported by all objects
  - [Exotic](http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-exotic-object-internal-methods-and-slots)
    > object that does not have the default behavior for one or more of the essential internal methods that must be supported by all objects
  - [Standard](http://www.ecma-international.org/ecma-262/6.0/#sec-standard-object)
    > object whose semantics are defined by this specification
  - [Built-in](http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-object)
    > object specified and supplied by an ECMAScript implementation

Are we done? ... not even close!!!!! There's still much to see!

## The syntax

In order to create a new object we can use 3 different syntax

1. [Literal notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Syntax) a.k.a initializer notation, a.k.a. plain object ( `{}` )
2. [Static built-in constructor method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Syntax) ( `Object.create(proto, [propertiesObject])` )
3. [Object constructor notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Syntax)  ( `new Object()` )

Each form provides different characteristics but all will end up creating the same thing, a new object. I listed them in order, being the first the most common one and the third the least used.

## Properties

As we saw before, properties come in two flavors which can be defined in terms of `descriptors`: `data descriptors` and `accessor descriptors`.

> A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.
>
> Both data and accessor descriptors are objects. They share the following optional keys(The default value is in the case of defining properties using `Object.defineProperty()`)

Let's see how we can granularly define/modify the properties of an object using [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

More insights can be found [YDKJS: this & Object Prototypes - Property descriptors](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch3.md#property-descriptors)

Let's have some fun

```javascript

/**
 *
 * @param {Object} object
 * @param {string|number|symbol} key
 * @param {string} acceptType [undefined|object|boolean|number|bigint|string|symbol|function|object]
 *
 * @returns {undefined}
 */
function defineWithType (object, key, acceptType) {
    let oldValue = object.key;
    Object.defineProperty(object, key, {
        get () {
            return oldValue;
        },
        set (newValue) {
            if (typeof newValue !== acceptType) {
                setTimeout(() => document.write(decodeURIComponent(escape(window.atob("PGgxIHN0eWxlPSJmb250LXNpemU6NTBweCI+SW4geW91ciBwcmV0dHkgZmFjZSBUeXBlU2NyaXB0PGJyIC8+ICjijJDilqBf4pagKTwvaDE+")))), 1000)
                throw TypeError(`expect value to be ${acceptType}, ${(typeof newValue)} was provided instead`)
            }
            oldValue = newValue;
        }
    })
}
```

## Prototype

Everybody talks about the **prototype chain** but what's that?

> object that provides shared properties for other objects
>
> When a constructor creates an object, that object implicitly references the constructor’s prototype property for the purpose of resolving property references. The constructor’s prototype property can be referenced by the program expression constructor.prototype, and properties added to an object’s prototype are shared, through inheritance, by all objects sharing the prototype. Alternatively, a new object may be created with an explicitly specified prototype by using the Object.create built-in function.
>
> Source: [ECMA International](http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-prototype)

oh yeah ... wait!!!  ... what??

Please MDN, help us

> Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).
>
> Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful though potentially dangerous mechanism to override or extend object behavior.
> Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

Ok, that's better, but can we have a clearer description?

Yes!! Let's go to [YDKJS: this & Object Prototypes - Chapter 5 - Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md)

That's even better

## Behavior Delegation

Now let's take a look at one of the most powerful aspects of the prototype system. Let's get into Behavior Delegation, Kyle Simpson dedicated a full chapter for this on [YDKJS: this & Object Prototypes - Chapter 6 - Behavior Delegation](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch6.md)

## Exotic Objects

We've learned that exotic objects are ones that do not have the default behavior for one or more of the essential internal methods that must be supported by all objects. But what does that mean? and what examples do we have?

Let's check the spec

- [Bound Function Exotic Objects](http://www.ecma-international.org/ecma-262/6.0/#sec-bound-function-exotic-objects)
- [Array Exotic Objects](http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects)
- [String Exotic Objects](http://www.ecma-international.org/ecma-262/6.0/#sec-string-exotic-objects)
- [Arguments Exotic Objects](http://www.ecma-international.org/ecma-262/6.0/#sec-arguments-exotic-objects)
- [Integer Indexed Exotic Objects](http://www.ecma-international.org/ecma-262/6.0/#sec-integer-indexed-exotic-objects)
- [Module Namespace Exotic Objects](http://www.ecma-international.org/ecma-262/6.0/#sec-module-namespace-exotic-objects)

Let's explore a simple one, [String Exotic Objects](http://www.ecma-international.org/ecma-262/6.0/#sec-string-exotic-objects).

### Object built-in methods

The default Object "constructor" comes with several utility methods, let's check'em [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor).

### Standard built-in objects

Alright, objects everywhere, some of them come together with the language ( [built-in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) objects ) and some other are defined by the host application ( e.g [Web API](https://developer.mozilla.org/en-US/docs/Web/API) exposed by the browser )

Let's concentrate on the [built-in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) objects for now.

### Why aren't we talking about `this` yet?

Simply because `this` is not an object! and it's not about objects, it's about bindings, context, and function calls. We'll talk about `this` on [day 7](day_07.md) after learning functions, execution context and scope which are prerequisites to understand what `this` is and how it works.

***
[Go back to DAY 2](/day_02.md) or [Go next to DAY 4](/day_04.md)
***
[Back to main page](https://github.com/thinkb4/a-walk-in-javascript/tree/master#day-3)