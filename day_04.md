# [A walk in JavaScript](/README.md)

## DAY 4

- Indexed and Keyed Collections
  - Collections family
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays>
  - <https://github.com/Jaxolotl-Didactic-Lab/useful-info/blob/develop/array.md>
  - <https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md#array>
  - Regular and typed arrays <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Indexed_collections_Arrays_and_typed_Arrays>
  - .. good practices
- Array Built in methods
  - <https://github.com/Jaxolotl-Didactic-Lab/useful-info/blob/develop/array.md>
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals>
  - .. good practices

### Collections family

ECMAScript 2015 specifies 2 flavors of **collections**, **Indexed** and **Keyed** and this two are divided in 2 child groups as described below.

Collections

- [Indexed](http://www.ecma-international.org/ecma-262/6.0/#sec-indexed-collections)
  - [Array Objects](http://www.ecma-international.org/ecma-262/6.0/#sec-array-objects)
  - [Typed Array Objects](http://www.ecma-international.org/ecma-262/6.0/#sec-typedarray-objects)
- [Keyed](http://www.ecma-international.org/ecma-262/6.0/#sec-keyed-collection)
  - [Maps](http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects) & [Sets](http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects)
  - [Weak Maps](http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects) & [Weak Sets](http://www.ecma-international.org/ecma-262/6.0/#sec-weakset-objects)

Mastering all of them is a long journey and out of scope for a 1-day-walk , so let's have a summary from MDN before moving forward with Arrays.

> Arrays are regular objects for which there is a particular relationship between integer-key-ed properties and the 'length' property. Additionally, arrays inherit from `Array.prototype` which provides to them a handful of convenient methods to manipulate arrays. For example, [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) (searching a value in the array) or [`push`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/push) (adding an element to the array), etc. This makes Arrays a perfect candidate to represent lists or sets.
>
> Typed Arrays are new to JavaScript with ECMAScript 2015 and present an array-like view of an underlying binary data buffer.
>
> Source: [MDN Online](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Indexed_collections_Arrays_and_typed_Arrays)

**Funky note:**
MDN is saying "**regular objects**" but the spec says "**exotic objects**". ¯\\_(ツ)_/¯ yayyy consistency!

> [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), [WeakMaps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap), [WeakSets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) data structures take object references as keys and are introduced in ECMAScript Edition 6. `Set` and `WeakSet` represent a set of objects, while `Map` and `WeakMap` associate a value to an object. The difference between Maps and WeakMaps is that in the former, object keys can be enumerated over. This allows [garbage collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#Garbage_collection) optimizations in the latter case.
>
> Source: [MDN Online](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Keyed_collections_Maps_Sets_WeakMaps_WeakSets)

Further reading can be found at [YDKJS: ES6 & Beyond - Chapter 5: Collections](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch5.md#chapter-5-collections)

### The Array Object

Let's start with MDN First Steps introduction:

> Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. Maybe we've got a series of product items and their prices stored in an array, and we want to loop through them all and print them out on an invoice, while totaling all the prices together and printing out the total price at the bottom.
>
> Source: [MDN Online](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

Also we can have further insights at the Global Objects reference:

> Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.
>
> Arrays cannot use strings as element indexes (as in an [associative array](https://en.wikipedia.org/wiki/Associative_array)) but must use integers. Setting or accessing via non-integers using [bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) (or [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's [object property collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Properties). The array's object properties and list of array elements are separate, and the array's [traversal and mutation operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Array_methods) cannot be applied to these named properties.
>
> Source: [MDN Online](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Description)

That was a lot!

In the last paragraph it is clear that Arrays in JavaScript defer from other languages, they're **list-like objects** with a lot of particular mechanisms to work with a numeric-auto-indexed-key but at the end, they're objects, hence inheriting all it's characteristics.

```javascript
// example of auto-index gotcha in JavaScript

let a = []; // an array with no entries

a[3] = 'a string in slot with index 3';

a.length;
// > 4
// wait, what?!

[...a.keys()]
// > [0, 1, 2, 3]

[...a.values()]
// > [undefined, undefined, undefined, "a string in slot with index 3"]

// ¯\_(ツ)_/¯

```

**You can't hold no entry 3 if you ain't got no 0, 1 and 2**
*( thanks [Victor Wooten](https://www.youtube.com/watch?v=KoeRB5ZmXkk) for that!! )*

My suggestion, if you don't expect German and English syntax and semantic to be the same, why should you expect that from programming languages? Embrace the languages characteristics and grok them so you can master them and enjoy their uniqueness.

### Syntax

Now we know an array can be initialized in two ways ( there are others we'll see later on ), `[element0, element1, ..., elementN]]` a.k.a. [literal notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals) or through `new Array(element0, element1[, ...[, elementN]])` and `new Array(arrayLength)` the global object Array constructor method, being the former ( literal notation ) the recommended one for most of the cases.

### Array Built-in methods

The Array Object has a lot of functionalities packed ind and ready for use, they come in 2 flavor ( [déjà vu](https://en.wikipedia.org/wiki/D%C3%A9j%C3%A0_vu) ), [Static access](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods) and [Instance access](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2), and they will provide you the necessary tools to work efficiently with the collection.

Methods hierarchy

- [Static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods) ( Constructor level access )
  > Creation and validation.
  > No instance required, not really static for JS but calling them Constructor access sounds even more misleading
- [Instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) ( Prototype chain level access )
  > Accessible through the prototype chain for every initialized array
  - [Mutators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)
     > Upon execution they will modify the array
  - [Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessor_methods)
     > They'll work with the array entries and return a new array with the results. No modification of the original array will be done.
  - [Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)
     > They provide a way to walk through the entries of an array, some of them accept a callback. Technically they don't modify the original array unless you explicitly define that behavior on the callback.

Aaaand, we have all built-in methods Objects have.
