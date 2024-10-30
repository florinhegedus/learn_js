## Fundamentals
1. **Hello, world!**
    - `<script>` tag
    - js code inside html or in separate files
    - showed an alert
2. **Code structure**
    - `;` separates statements
    - `newline` usually implies `;`, so `;` is not needed
    - add single line comments `//` and multiline comments `/* */`
    - nested comments are not supported
3. **use strict**
    - `"use strict"` placed at the beginning of a file or function
    - introduced to enable developers to write js the "modern way", with stricter rules and parsing
    - classes and modules use by default strict mode
    - in console strict mode is disabled by default, use `shift + enter` to input multiple lines
4. **Variables**
    - `let`, `var`, `const`
    - `$` and `_` can be used in variable names
5. **Types**
    - primitive: `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, `symbol`
    - non-primitive: `object`
    - `typeof x`: returns a string with the name of the type
6. **alert-prompt-confirm**
    - `alert` shows a message
    - `prompt` shows a message and asks for input, returns the text or `null`
    - `confirm` shows a message and returns true or false
7. **Type conversions**
    - string conversion: `String(value)`
    - numeric conversion: `Number(value)`
        - `undefined` -> `NaN`
        - `null` -> 0
        - `true` / `false` -> 1 / 0
        - string -> spaces, tabs, newlines are ignored, empty string is 0, an error gives a Nan
        - `+` also casts variables to be numbers
    - boolean conversion: `Boolean(value)`
        - `0`, `null`, `undefined`, `NaN`, `""` -> `false`
        - any other value -> `true`
8. **Operators**
    - convert strings with `+`
    - increment `value++` or `++value`
9. **Comparison**
    - values of different types are converted to numbers
    - `===` strict equality check
    - `null` and `undefined` only equal each other, but no other value
    - check separately for `null`, `undefined`
10. **if - else**
    - default syntax:
    '''
        if (condition) {
            message = "YES;
        } else {
            message = "NO;
        }
    '''
    - `?` operator: `message = condition ? "YES : "NO"`
11. **Logical operators**
    - chain of `!!` returns first truthy value or last one if there is no truthy value
    - chain of `&&` returns first falsy value or last one if there is no falsy value
    - `!` converts the operand to boolean type and returns the inverse value
12. **Nullish coalescing operator**
    - `??` short way to choose first defined variable from a list
    - forbidden to use it with `||` and `&&` without parantheses
13. **Loops**
    - `for`, `while`, `do ... while`
    - `break`, `continue` and label for loops to break a specific outter loop

14. **switch statement**
    - `switch` uses strictly equal `===` to match cases
