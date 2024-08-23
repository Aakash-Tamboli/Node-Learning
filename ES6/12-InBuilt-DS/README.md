# JavaScript Data Structures: Arrays, Object Literals, Sets, and Maps

## Video Explaination

- [Array](https://youtu.be/txjmvEPlAtU?feature=shared)

- [Object](https://youtu.be/1c9CArj66mU?feature=shared)

- [Set](https://youtu.be/vfPd6_H7W4Q?feature=shared)

- [Map](https://youtu.be/XOpKmpRh69Y?feature=shared)

## Arrays

Arrays are ordered collections of elements in JavaScript. They can hold multiple data types (e.g., numbers, strings, objects) and are commonly used for storing lists of data.

### Commonly Used Methods

- **`push(element)`**: Adds one or more elements to the end of an array.

  ```javascript
  let fruits = ['apple', 'banana'];
  fruits.push('orange'); // ['apple', 'banana', 'orange']
  ```

  **Time Complexity**: O(1) on average.

- **`pop()`**: Removes the last element from an array and returns it.

  ```javascript
  let fruits = ['apple', 'banana', 'orange'];
  let lastFruit = fruits.pop(); // 'orange'
  // fruits is now ['apple', 'banana']
  ```

  **Time Complexity**: O(1).

- **`shift()`**: Removes the first element from an array and returns it.

  ```javascript
  let fruits = ['apple', 'banana', 'orange'];
  let firstFruit = fruits.shift(); // 'apple'
  // fruits is now ['banana', 'orange']
  ```

  **Time Complexity**: O(n).

- **`unshift(element)`**: Adds one or more elements to the beginning of an array.

  ```javascript
  let fruits = ['banana', 'orange'];
  fruits.unshift('apple'); // ['apple', 'banana', 'orange']
  ```

  **Time Complexity**: O(n).

- **`map(callback)`**: Creates a new array populated with the results of calling a provided function on every element in the calling array.

  ```javascript
  let numbers = [1, 2, 3];
  let doubled = numbers.map(x => x * 2); // [2, 4, 6]
  ```

  **Time Complexity**: O(n).

- **`filter(callback)`**: Creates a new array with all elements that pass the test implemented by the provided function.

  ```javascript
  let numbers = [1, 2, 3, 4];
  let evens = numbers.filter(x => x % 2 === 0); // [2, 4]
  ```

  **Time Complexity**: O(n).

- **`reduce(callback, initialValue)`**: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

  ```javascript
  let numbers = [1, 2, 3, 4];
  let sum = numbers.reduce((acc, val) => acc + val, 0); // 10
  ```

  **Time Complexity**: O(n).

### Use Cases

- **Storing lists**: Arrays are ideal for maintaining a list of elements, such as a list of user names or numbers.
- **Manipulating collections**: Arrays provide methods to add, remove, and iterate over elements, making them versatile for many applications like data processing.

## Object Literals

Object Literals are collections of key-value pairs, where keys are strings (or Symbols), and values can be of any type. They are often used to represent structured data.

### Commonly Used Methods

- **`Object.keys(obj)`**: Returns an array of a given object's own enumerable property names.

  ```javascript
  let user = { name: 'Alice', age: 25 };
  let keys = Object.keys(user); // ['name', 'age']
  ```

  **Time Complexity**: O(n).

- **`Object.values(obj)`**: Returns an array of a given object's own enumerable property values.

  ```javascript
  let user = { name: 'Alice', age: 25 };
  let values = Object.values(user); // ['Alice', 25]
  ```

  **Time Complexity**: O(n).

- **`Object.entries(obj)`**: Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

  ```javascript
  let user = { name: 'Alice', age: 25 };
  let entries = Object.entries(user); // [['name', 'Alice'], ['age', 25]]
  ```

  **Time Complexity**: O(n).

- **`hasOwnProperty(prop)`**: Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

  ```javascript
  let user = { name: 'Alice', age: 25 };
  let hasName = user.hasOwnProperty('name'); // true
  ```

  **Time Complexity**: O(1).

### Use Cases

- **Representing structured data**: Object Literals are useful for representing entities with properties, such as a user (`{name: "Alice", age: 25}`).
- **Configuration objects**: Used to pass configurations and options, such as `{port: 8080, timeout: 5000}`.

## Sets

Sets are collections of unique values. Unlike arrays, a Set does not allow duplicate values.

### Commonly Used Methods

- **`add(value)`**: Adds a new element with the given value to the Set.

  ```javascript
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(2); // Duplicate, will not be added
  // uniqueNumbers is now Set(2) { 1, 2 }
  ```

  **Time Complexity**: O(1).

- **`delete(value)`**: Removes the specified element from the Set.

  ```javascript
  let uniqueNumbers = new Set([1, 2, 3]);
  uniqueNumbers.delete(2); // Set(2) { 1, 3 }
  ```

  **Time Complexity**: O(1).

- **`has(value)`**: Returns a boolean indicating whether an element with the specified value exists in the Set.

  ```javascript
  let uniqueNumbers = new Set([1, 2, 3]);
  let hasTwo = uniqueNumbers.has(2); // true
  ```

  **Time Complexity**: O(1).

- **`clear()`**: Removes all elements from the Set.

  ```javascript
  let uniqueNumbers = new Set([1, 2, 3]);
  uniqueNumbers.clear(); // Set(0) {}
  ```

  **Time Complexity**: O(1).

### Use Cases

- **Unique collections**: Useful when a collection must have unique values, such as a list of unique tags or user IDs.
- **Set operations**: Enables performing operations like unions, intersections, and differences between sets.

## Maps

Maps are collections of key-value pairs where keys can be of any type. Unlike Object Literals, keys in Maps can be any data type, including functions, objects, or any primitive.

### Commonly Used Methods

- **`set(key, value)`**: Adds or updates an element with the specified key and value.

  ```javascript
  let userRoles = new Map();
  userRoles.set('Alice', 'admin');
  userRoles.set('Bob', 'editor');
  ```

  **Time Complexity**: O(1).

- **`get(key)`**: Returns the value associated with the specified key, or `undefined` if the key does not exist.

  ```javascript
  let userRoles = new Map([['Alice', 'admin'], ['Bob', 'editor']]);
  let role = userRoles.get('Alice'); // 'admin'
  ```

  **Time Complexity**: O(1).

- **`has(key)`**: Returns a boolean indicating whether an element with the specified key exists.

  ```javascript
  let userRoles = new Map([['Alice', 'admin'], ['Bob', 'editor']]);
  let hasAlice = userRoles.has('Alice'); // true
  ```

  **Time Complexity**: O(1).

- **`delete(key)`**: Removes the specified element by key.

  ```javascript
  let userRoles = new Map([['Alice', 'admin'], ['Bob', 'editor']]);
  userRoles.delete('Bob'); // Map(1) { 'Alice' => 'admin' }
  ```

  **Time Complexity**: O(1).

- **`clear()`**: Removes all key-value pairs from the Map.

  ```javascript
  let userRoles = new Map([['Alice', 'admin'], ['Bob', 'editor']]);
  userRoles.clear(); // Map(0) {}
  ```

  **Time Complexity**: O(1).

### Use Cases

- **Dictionaries**: Useful when a dictionary-like structure is needed, where quick lookups by key are essential.
- **Storing metadata**: Suitable for storing metadata or configurations that need efficient lookups and updates.

---

By understanding the different data structures available in JavaScript, their methods, and time complexities, you can make more informed decisions about which to use based on the requirements of your application.