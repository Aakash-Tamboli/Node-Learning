# Express.js Cookies

In Express.js, cookies are small pieces of data stored on the client-side (usually in the browser) and sent back to the server with each HTTP request. Cookies are used to store session information, track user activities, or remember user preferences.

## Unsigned Cookies

Unsigned cookies are regular cookies stored on the client-side without any cryptographic protection. They store simple key-value pairs, and their content is easily readable by anyone, including the user. Unsigned cookies are not secure and should not be used to store sensitive information.

### Example of Setting an Unsigned Cookie

```javascript
res.cookie('username', 'JohnDoe', { maxAge: 900000, httpOnly: true });
```

In this example:
- `'username'` is the name of the cookie.
- `'JohnDoe'` is the value of the cookie.
- `{ maxAge: 900000, httpOnly: true }` specifies the cookie's lifespan and other options.

## Signed Cookies

Signed cookies are similar to unsigned cookies but with added security. When a cookie is signed, its value is encrypted or hashed with a secret key before being stored on the client-side. This ensures that the cookie's integrity is maintained, as any tampering with the cookie value will invalidate it.

Signed cookies are useful for verifying that the content of the cookie hasn't been changed by the client.

### Example of Setting a Signed Cookie

```javascript
res.cookie('session', '123456', { signed: true, maxAge: 900000, httpOnly: true });
```

In this example:
- The `signed: true` option ensures that the cookie is signed with a secret key.

### Verifying a Signed Cookie

When the server receives a signed cookie, it can verify the integrity of the cookie by comparing it against the hash value it generated. If the cookie value has been tampered with, the verification will fail, and the server will treat the cookie as invalid.

## Summary

- **Unsigned Cookies**: Simple cookies without any protection. Not secure.
- **Signed Cookies**: Cookies that include a cryptographic signature to ensure integrity and prevent tampering.

## Using `cookie-parser` Middleware

In Express, the `cookie-parser` middleware is often used to handle both signed and unsigned cookies. If you use signed cookies, you must set a secret key that the middleware will use to sign and verify the cookies.

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Set a secret key for signing cookies
app.use(cookieParser('your_secret_key'));

app.get('/', (req, res) => {
  // Set a signed cookie
  res.cookie('session', '123456', { signed: true, maxAge: 900000, httpOnly: true });
  res.send('Signed cookie set!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

# Clearing Cookies on the Client Side with JavaScript

[Clearing Cookies on the Client Side with JavaScript]()

# Next Topic

[Express-Session](https://github.com/Aakash-Tamboli/Node-Learning/tree/master/express-framework/Learning-Express/Topic-Wise/12-Express-Session)
