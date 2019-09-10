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
