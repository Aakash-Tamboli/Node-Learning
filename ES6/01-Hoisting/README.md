# 🧙‍♂️ What is Hoisting?

Imagine JavaScript as a quirky magician. 🎩✨ When you write your code, it secretly goes, "Abracadabra!" and pulls variables and functions to the top of their scope, even before the code runs. This sneaky trick is called **hoisting**.

But here's the catch—only the **declarations** are hoisted, not the initializations. Think of it as the magician bringing the rabbit out of the hat but forgetting to make it fluffy until later. 🐇

### For Video Example

- [Hoisting](https://youtu.be/izlLVx_dTH0?feature=shared)

- [let Keyword](https://youtu.be/dvpKScnKOHw?feature=shared)

- [const keyword](https://youtu.be/QS-c5aQS_Mw?feature=shared)

- [let vs const](https://youtu.be/kFgb4Hcxer8?feature=shared)


### Example:

```javascript
console.log(myVar); // 🧐 What will happen here?
var myVar = "I'm learning JavaScript!";

// Behind the scenes, it’s like:
// var myVar;
// console.log(myVar); // undefined 😱
// myVar = "I'm learning JavaScript!";
```

Notice how the variable declaration `var myVar;` is hoisted to the top, but the assignment isn’t? That’s hoisting in action!

## 🛡️ Enter `let` and `const` – The Heroes We Deserve!

JavaScript wasn’t done evolving. Along came `let` and `const`, two heroes that said, "Enough with this hoisting confusion!" 💥

### 🦸‍♂️ `let` – The Block-Scoped Avenger

`let` is like `var`, but smarter and more responsible. It’s block-scoped, meaning it only lives inside the `{}` where it was born. No more accidental overwrites or weird hoisting issues!

```javascript
if (true) {
    let blockHero = "I'm safe inside this block!";
    console.log(blockHero); // "I'm safe inside this block!"
}
console.log(blockHero); // 🚫 Error: blockHero is not defined!
```

### 🦸‍♀️ `const` – The Immutable Guardian

`const` is like `let` but with a superpower: once it’s assigned, it can’t be reassigned. It’s perfect for variables that shouldn’t change, like constants.

```javascript
const pi = 3.14;
pi = 3.14159; // 🚫 Error: Assignment to constant variable.
```

But wait—there’s more! If `const` holds an object or array, you can still change the contents (mutate), but you can’t reassign the whole thing.

```javascript
const heroTeam = ["Iron Man", "Captain America"];
heroTeam.push("Thor"); // 💪 This works!
heroTeam = ["Hulk"]; // 🚫 Error: Assignment to constant variable.
```
### Use Case: Constants and Immutable Data

```javascript
const DAYS_IN_WEEK = 7;
const user = {
    name: "Alice",
    age: 25
};

user.name = "Bob"; // Allowed! You can change properties
user = {}; // Error! You can’t reassign the object
```

### When to Use `let` and `const`?

- Use `const` by default unless you know you’ll reassign the variable.
- Use `let` when you need to reassign or change the value.

And there you have it, code explorer! 🎉 You’re now armed with the knowledge of arrow functions, `let`, and `const`. Go forth and write clean, modern JavaScript code that’ll make you and your GitHub followers proud! 🚀

## 🎉 Wrap-Up

So, what did we learn today? 

- **Hoisting** is JavaScript’s way of moving declarations to the top. 
- `let` and `const` are the cool kids that prevent hoisting quirks and keep your code clean.

Keep experimenting, and soon you'll be a JS wizard! 🌟✨ Don’t forget to push your notes to GitHub and show off your learning journey. Until next time, happy coding! 🎈👨‍💻

# [Next Topic -> Arrow Functions](https://github.com/Aakash-Tamboli/Node-Learning/tree/master/ES6/02-Arrow-Functions)