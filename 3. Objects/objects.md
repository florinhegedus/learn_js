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
