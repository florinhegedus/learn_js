## Data types
1. **Methods of primitives**
    - primitives except `null` and `undefined` have helpful methods
    - these methods work through `temporary objects`
2. **Numbers**
    - `isFinite` is used to validate a number
    - `parseInt` parses a string and returns an integer
    - `Math.floor`, `Math.ceil`, `Math.trunc`, `Math.round`
3. **Array**
    - special object suited to store and manage ordered data
    ```
    let arr = [item1, item2...];
    lry arr = new Array(item1, item2...);
    ```
    - getting elements: `arr.at(index)` or `arr[index]`
    - operations: `push`, `pop`, `shift`, `unshift`
    - iterate: `for (let i=0; i<arr.length; i++)` or `for (let item of arr)`
        - !!! never use `for (let item in arr)`, it is used to iterate over generic object's properties
