## Data types
1. **Methods of primitives**
    - primitives except `null` and `undefined` have helpful methods
    - these methods work through `temporary objects`
2. **Numbers**
    - `isFinite` is used to validate a number
    - `parseInt` parses a string and returns an integer
    - `Math.floor`, `Math.ceil`, `Math.trunc`, `Math.round`
3. **String**
    - can have strings in `"some str"`, `'some str'` or between backticks
    - `[]` or `.at` to get a character
    - `slice` or `substring` to get a substring
    - `toLowerCase` or `toUpperCase`
    - `indexOf` to look for substring, also `includes`, `startsWith`, `endsWith`
    - `trim` to remove spaces at start and end of string
    - `repeat` to repeat the string
4. **Array**
    - special object suited to store and manage ordered data
    ```
    let arr = [item1, item2...];
    lry arr = new Array(item1, item2...);
    ```
    - getting elements: `arr.at(index)` or `arr[index]`
    - operations: `push`, `pop`, `shift`, `unshift`
    - iterate: `for (let i=0; i<arr.length; i++)` or `for (let item of arr)`
        - !!! never use `for (let item in arr)`, it is used to iterate over generic object's properties
5. **Array methods**
    - `push(...items)` - add items to end
    - `pop()` - extract item from end
    - `shift()` - extract item from beginning
    - `unshift()` - add items to beginning
    - `splice(pos, deleteCount, ...items)` - at index `pos` delete `deleteCount` elements and insert `items`
    - `slice(start, end)` - create new array, copy elements from `start` to `end`
    - `concat(...items)` - return new array, copy elements from current array and add `items` to it
6. **Iterables**
    - `for..of`
    - must implement `Symbol.iterator`
    - must implement method `next` that returns `{done: Boolean, value: any}`
    - `Symbol.iterator` is called automatically by `for..of`
    - objects that have indexed properties are called `array-like`
    - `Array.from` makes a real `Array` from `iterable`
7. **Map and set**
    - `Map` is a collection of keyed values
    - `Set` is a collection of unique values
8. **WeakMap and WeakSet**
    - `WeakMap` is a `Map`-like collection, allows only objects as values and they removed from the `WeakMap` automatically if they are not reachable by other means
    - `WeakSet` is a `Set`-like collection, allows only objects and they are removed from the set if they are not reachable by other means
9. **Object.keys, values, entries**
    - `Object.keys(obj)` - returns an array of keys
    - `Object.values(obj)` - returns an array of values
    - `Object.entries(obj)` - returns an array of `[key, value]` pairs
10. **Destructuring assignment**
    - map an object or an array to many variables
    - object: `let {prop: varName = defaultValue, ...rest} = object`
    - array: `let [item1 = defaultValue, ...rest] = array`
