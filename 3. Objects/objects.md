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

