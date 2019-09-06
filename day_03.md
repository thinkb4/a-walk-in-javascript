# [A walk in JavaScript](/README.md)

## DAY 3

- Objects explained
  - Objects, the big picture
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects>
  - Object properties attributes (accessors, descriptors)
  - Exotic Object <https://www.ecma-international.org/ecma-262/6.0/#sec-exotic-object>
  - .. good practices
- Objects Built in methods
  - ...
  - ...
  - .. good practices

## Objects, the big picture

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
    > Note that even when using variables for [Computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names), unless they're symbols, they will be ultimately converted into their string representation witch might end up overwriting an existent property ( e.g. resulting in `[object Object]` by using two different variables containing 2 different objects )
  - [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type)
    > No overwriting is happening unless you use a variable containing the same symbol
- Properties values can be of any valid ECMAScript type ( including objects and all subtypes of object )
- Properties have hierarchy
  - [Own properties](http://www.ecma-international.org/ecma-262/6.0/#sec-own-property)
    > those defined at the current object level
  - [Inherited properties](http://www.ecma-international.org/ecma-262/6.0/#sec-inherited-property)
    > those defined at any higher level of the "inheritance" chain ( [prototype](http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-prototype) chain ), and like a Matryoshka, we could have many nesting levels and even circular references!!!
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
