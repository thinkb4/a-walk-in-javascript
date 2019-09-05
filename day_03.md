# [A walk in JavaScript](/README.md)

## DAY 3

- Objects explained
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects>
  - Object properTies attributes (accessors, descriptors)
  - Exotic Object <https://www.ecma-international.org/ecma-262/6.0/#sec-exotic-object>
  - .. good practices
- Objects Built in methods
  - ...
  - ...
  - .. good practices

## Objects

First we went through an introduction of the language, then we jumped into the syntax, grammar and types where we realized that "not everything in javascript is an object!", Primitives are not objects and they're immutable! and we also noted the Object type in JS has many flavors ( aka sub-types ), but ... what's an object? what can ww do with them? what's the use?

Let's try to grab some insight from the documentation available online starting with the first occurrence on the ECMA2015 spec.

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
>
> Source: [ECMA International](http://www.ecma-international.org/ecma-262/6.0/#sec-object-type)

**Now we're talking!!!**

