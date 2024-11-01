## Code quality
1. **Debugging chrome**
    - `F12` to open `dev tools`
    - `Sources` panel to view files
    - `Esc` to open console
    - click on line number to put a `breakpoint`
    - `debugger` command
    - tools: `Watch`, `Call Stack`, `Scope`
    - `resume` (`F8`), `step` (`F9`), `step over` (`F10`), `step into` (`F11`), `step out` (`shift + F11`)
    - `console.log(...)` outputs things to console
2. **Coding style**
    - automated linters: `ESLint`
3. **Comments**
    - special syntax used to document a function: `JSDoc`
4. **Ninja code**
    - tips on how to make your code unreadable
5. **Testing mocha**
    - add `mocha` for tests and `chai` for assert statements
    - `describe` and `it` specify what the function does
    - inside `it` use `assert`
6. **Polyfills and transpilers**
    - `transpilers` parse code and rewrite it using older syntax
    - `polyfills` are scripts that update/add new functions in outdated js engines
    