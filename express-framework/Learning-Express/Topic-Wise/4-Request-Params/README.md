# Express.js `req.params`

## Overview

In Express.js, `req.params` is an object that contains properties mapped to the named route parameters in the URL. Route parameters are segments of the URL that are defined in the route path and are used to capture specific values from the URL.

## Example Usage

```javascript
const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Explanation

- **Route Definition**: The route is defined as `/user/:id`, where `:id` is a named route parameter.
- **Accessing the Parameter**: When a client makes a request to `/user/123`, the value `123` is captured and stored in `req.params.id`.
- **Response**: The server will respond with `User ID is 123`.

## Key Points

- `req.params` is an object that contains key-value pairs, where the key is the name of the route parameter, and the value is the actual value passed in the URL.
- It is useful for extracting dynamic values from the URL, such as IDs, slugs, or other variables.

## Practical Applications

- **User Profiles**: Fetching user data based on a unique ID from the URL.
- **Product Pages**: Displaying product information based on a product ID in the URL.
- **SEO-Friendly URLs**: Creating URLs with meaningful segments that can be used to capture and use data dynamically.\

