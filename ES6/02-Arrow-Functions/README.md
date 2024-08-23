# 🎯 Arrow Functions: The Cool, Concise Way to Write Functions!

Arrow functions are like the new kids on the block who know how to keep things short and sweet. Imagine you have to write a function, but you don’t want to keep typing that long `function` keyword—arrow functions to the rescue! 🏹

## Video

- [Arrow Functions](https://youtu.be/4N-L3Mmzu0Y?feature=shared)

- [Lexical with 'this'](https://youtu.be/0T5M3agKEnk?feature=shared)

### Basic Syntax

```javascript
// Traditional Function
function sayHello() {
    return "Hello, world!";
}

// Arrow Function
const sayHello = () => "Hello, world!";
```

See the difference? 👀 Arrow functions make your code more compact and easier to read.

### Why Use Arrow Functions?

1. **Shorter Syntax**: Less typing, more coding! 🎉
2. **`this` Binding**: Arrow functions don’t have their own `this`. They use `this` from the surrounding code, which makes them super handy for certain tasks (like when you’re inside a method and don’t want to mess with `this`). 💪

### When to Use Arrow Functions?

- **Callbacks**: Perfect for those short functions you pass around.
- **Event Handlers**: When you need to refer to `this` from the outer scope.
- **Array Methods**: They’re your BFFs with methods like `.map()`, `.filter()`, and `.reduce()`.

```javascript
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * 2);
console.log(squared); // [2, 4, 6, 8]
```

# [Next Topic -> Default Arguments](https://github.com/Aakash-Tamboli/Node-Learning/tree/master/ES6/03-Default-Arguments)