# JavaScript Array Methods Overview

This document provides a concise explanation of commonly used JavaScript array methods such as `forEach`, `map`, `filter`, `find`, and `indexOf`.

## `forEach`
The `forEach` method iterates over an array and executes a provided function once for each element. It does **not return** anything.

```js
[1, 2, 3].forEach(item => console.log(item));
```

## `map`
The `map` method creates a **new array** by applying a function to every element of the original array.

```js
const result = [1, 2, 3].map(item => item * 2);
// result: [2, 4, 6]
```

## `filter`
The `filter` method returns a **new array** with elements that pass the condition implemented by the provided function.

```js
const result = [1, 2, 3].filter(item => item > 1);
// result: [2, 3]
```

## `find`
The `find` method returns the **first element** that satisfies the provided condition. If none is found, it returns `undefined`.

```js
const result = [1, 2, 3].find(item => item === 2);
// result: 2
```

## `indexOf`
The `indexOf` method returns the **first index** where a specified value is found in the array. If not found, it returns `-1`.

```js
const index = [1, 2, 3].indexOf(2);
// index: 1
```

---

## Explained in Hindi
For a detailed explanation in Hindi, check out [this video](https://youtu.be/T55Kb8rrH1g).

