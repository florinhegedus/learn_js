## Advanced working with functions
1. **Recursion**
- a recursively-defined data structure is a data structure that can be defined by using itself, e.g. HTML tree where every branch can have other branches
2. **Rest parameters and spread syntax**
- `...` at the end of function call represents `rest parameters`
- `...` in a function call is called `spread syntax` and it expands an array into a list
3. **Variable scope**
- variables inside code blocks `{...}` are only visible within that scope
- nested functions - functions inside other functions, functions in `return` statements
4. **Var**
- `var` variables have no block scope, they are visible in the whole function or globally if declared outside a function
- declarations are processed at the start of the script
5. **Global object**
- holds variables that should be available everywhere
- examples are: `Array` , `window.innerHeight`
- `var` variables are properties of the global object
6. **Function object**
- functions are objects and have `name` and `length` (number of parameters)
7. **new Function**
- `let func = new Function([arg1, arg2, ...argN], functionBody);`
- have `[[Environment]]` referencing the global lexical environment and cannot reference the outer one
8. **setTimeout and setInterval**
- `setTimeout` runs a function once after the specified setInterval
- `setInterval` runs the function repeatedly at the specificed interval
- cancel with `clearTimeout`, `clearInterval`
9. 
10. 
