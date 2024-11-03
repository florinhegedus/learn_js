## Objects
1. **Object**
    - `let user = new Object()` or `let user = {}`
    - `user.property` or `user["property"]`
    - `delete user.property`
    - `for (let key in user)`
2. **Object copy**
    - objects are `copied by reference`
    - `Object.assign(target, sources)` for shallow copy
    - `new_obj = structuredClone(obj)` for deep copy
3. **Garbage collection**
    - performed automatically
    - objects are retained in memory as long as they are reachable from a root
4. **Object methods**
    - can be declared inside objects without the `function` keyword
    - make use of `this` to access current object
    - a function can be assigned to an object
```
function sayHello() {
    alert(`Hello, I am {this.name}`);
}

user.f = sayHello;
```
5. **Constructor**
    - constructor functions are regular functions, the name starts with a capital letter
    - `new` assures creation of empty `this`, populating it inside the `constructor` and returning it
6. **Optional chaining**
    - `obj?.prop`, `obj?.[prop]`, `obj.method?.()`
    - returns the property/method only if `obj` exists, otherwise returns `undefined`
7. **Symbol**
    - `Symbol` is a primitive type for unique identifiers
    - use cases are hidden object properties and changing built-in behaviors with `system symbols`
8. **Object to primitive**
    - three types: `string`, `number`, `default`
    - convert object to a primitive value