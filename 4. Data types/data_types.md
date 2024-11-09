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
    - 
