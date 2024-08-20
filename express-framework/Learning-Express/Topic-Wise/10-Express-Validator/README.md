# Express Validator Overview

The `express-validator` package provides a set of middleware for Express.js that helps you validate and sanitize user input. This ensures that the incoming data meets certain criteria, enhancing the security and robustness of your application.

## Installation

To install `express-validator`, run:

```bash
npm install express-validator
```

## Key Components

### 1. `query()`

The `query()` method is used to validate and sanitize data coming from the URL query string (`req.query`).

#### Example:
```javascript
const { query } = require('express-validator');

app.get('/search', [
  query('term').isLength({ min: 3 }).withMessage('Search term must be at least 3 characters long'),
], (req, res) => {
  // Handle request
});
```

### 2. `body()`

The `body()` method is used to validate and sanitize data in the body of the request (`req.body`).

#### Example:
```javascript
const { body } = require('express-validator');

app.post('/register', [
  body('email').isEmail().withMessage('Please enter a valid email address'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
], (req, res) => {
  // Handle request
});
```

### 3. `validationResult()`

The `validationResult()` function is used to gather the results of the validation and check if there are any errors. It returns an object that can be used to send back error messages or take other actions.

#### Example:
```javascript
const { validationResult } = require('express-validator');

app.post('/register', [
  // Validation middlewares...
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Proceed if no errors
});
```

### 4. `matchedData()`

The `matchedData()` function is used to extract only the validated data from the request. This is useful to ensure that only the validated and sanitized data is used in your application logic.

#### Example:
```javascript
const { matchedData } = require('express-validator');

app.post('/register', [
  // Validation middlewares...
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const validData = matchedData(req);
  // validData now contains only the validated fields
});
```

### 5. `checkSchema()`

The `checkSchema()` method allows you to define validation rules in a schema-like format. This is helpful for organizing validations, especially when dealing with more complex validation requirements.

#### Example:
```javascript
const { checkSchema } = require('express-validator');

const registrationSchema = {
  email: {
    isEmail: true,
    errorMessage: 'Please enter a valid email address',
  },
  password: {
    isLength: {
      options: { min: 5 },
      errorMessage: 'Password must be at least 5 characters long',
    },
  },
  age: {
    optional: true, // This field is optional
    isInt: {
      options: { min: 18 },
      errorMessage: 'You must be at least 18 years old',
    },
  },
};

app.post('/register', checkSchema(registrationSchema), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const validData = matchedData(req);
  // Proceed with the validData
});
```

## Summary

- **`query()`**: Validate and sanitize data from URL query parameters.
- **`body()`**: Validate and sanitize data from the request body.
- **`validationResult()`**: Check the results of validation and handle errors.
- **`matchedData()`**: Extract and use only the validated data.
- **`checkSchema()`**: Define validation rules using a schema for more complex validations.

Using `express-validator` helps ensure that your application processes only valid and sanitized data, reducing the risk of errors and security vulnerabilities.

# Next Topic

[Cookies](https://github.com/Aakash-Tamboli/Node-Learning/tree/master/express-framework/Learning-Express/Topic-Wise/11-Cookies)
