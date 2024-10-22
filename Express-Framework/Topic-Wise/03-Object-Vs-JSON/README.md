# JavaScript Objects vs JSON

## Overview
In JavaScript, both objects and JSON (JavaScript Object Notation) are used for storing and managing data. However, they have different characteristics and serve different purposes.

## JavaScript Objects
### Definition
An object in JavaScript is a collection of key-value pairs where:
- **Keys** are strings (or symbols).
- **Values** can be any data type, including other objects, functions, or arrays.

### Syntax
```javascript
const obj = {
  key1: "value1",
  key2: 42,
  key3: function() {
    console.log("Hello!");
  }
};
```

### Features
- Can hold methods (functions).
- Keys can be any valid identifier format.
- Values can be of any data type, including functions and other objects.
- Properties can be modified, added, or deleted.

## JSON (JavaScript Object Notation)
### Definition
JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is a text format that is completely language-independent but uses conventions familiar to programmers of the C family of languages, including JavaScript.

### Syntax
```json
{
  "key1": "value1",
  "key2": 42
}
```

### Features
- Keys must be strings enclosed in double quotes.
- Values must be one of the following types: string, number, object, array, true, false, or null.
- Cannot contain functions or undefined values.
- JSON is always a string when transmitted and needs to be parsed into an object to be used in JavaScript.

### Example Usage
Converting a JSON string to a JavaScript object:
```javascript
const jsonString = '{"key1": "value1", "key2": 42}';
const obj = JSON.parse(jsonString);
```

Converting a JavaScript object to a JSON string:
```javascript
const obj = { key1: "value1", key2: 42 };
const jsonStringified = JSON.stringify(obj);
```

## Key Differences
| Feature            | JavaScript Object | JSON                                |
|--------------------|-------------------|-------------------------------------|
| **Data Format**    | Native data structure | String-based data interchange format |
| **Usage Context**  | Used within JavaScript programs | Used for data transmission (e.g., between client and server) |
| **Structure**      | Can contain methods, any data type | Cannot contain methods, only data |
| **Flexibility**    | Can be modified (add/delete properties) | Static; must follow strict syntax rules |

## Example Comparison
### JavaScript Object
```javascript
const user = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
```

### JSON
```json
{
  "name": "Alice",
  "age": 30
}
```

## Summary

While JSON and JavaScript objects share a similar syntax, JSON is a text-based format for data exchange, whereas objects are a core part of JavaScript used to structure and manage data within the application.

## Next Topic

[Request Params Feature](../04-Request-Params/README.md)
