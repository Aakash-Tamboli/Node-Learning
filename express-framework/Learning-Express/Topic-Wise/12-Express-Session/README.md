## Express-Session Package

The `express-session` package is a middleware for Express.js that helps manage sessions in a web application. A session allows you to store information about a user across multiple requests, which is useful for implementing features like authentication, shopping carts, and user preferences.

### Key Concepts

- **Session ID**: Each user is assigned a unique session ID stored in a cookie on the user's browser. The server uses this ID to retrieve the session data.

- **Session Store**: The session data is stored on the server, typically in memory, a database, or another storage mechanism. By default, `express-session` stores sessions in memory, which is not suitable for production environments. You should use a session store like Redis, MongoDB, or another supported storage system for production.

- **Cookie**: The session ID is stored in a cookie on the client's browser. The `express-session` middleware manages this cookie and ensures it is sent with each request.

### Basic Setup and Example

Here's a simple example of using `express-session` in an Express.js application:

1. **Installation**:

   ```bash
   npm install express express-session
   ```

2. **Basic Usage**:

   ```javascript
   const express = require('express');
   const session = require('express-session');

   const app = express();

   // Set up the session middleware
   app.use(session({
       secret: 'your-secret-key', // Replace with a secure key
       resave: false,             // Don't save session if unmodified
       saveUninitialized: true,   // Save new but unmodified sessions
       cookie: { maxAge: 60000 }  // Session expiration time in milliseconds
   }));

   // Route to set a session value
   app.get('/set-session', (req, res) => {
       req.session.user = { name: 'John Doe', age: 30 };
       res.send('Session data set!');
   });

   // Route to get session data
   app.get('/get-session', (req, res) => {
       if (req.session.user) {
           res.send(`User Info: ${JSON.stringify(req.session.user)}`);
       } else {
           res.send('No session data found');
       }
   });

   // Route to destroy the session
   app.get('/destroy-session', (req, res) => {
       req.session.destroy(err => {
           if (err) {
               return res.status(500).send('Failed to destroy session');
           }
           res.send('Session destroyed!');
       });
   });

   // Start the server
   const PORT = 3000;
   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

### Explanation of Example

- **Session Middleware**:
  - `secret`: A secret key used to sign the session ID cookie. This should be a secure and unique string.
  - `resave`: If `false`, the session won't be saved back to the session store if it wasn't modified during the request.
  - `saveUninitialized`: If `true`, a session that is new but hasn't been modified will be saved to the store.
  - `cookie.maxAge`: Defines the duration (in milliseconds) the session will last before expiring.

- **Routes**:
  - `/set-session`: Sets session data (`user` object) that can be accessed across different requests.
  - `/get-session`: Retrieves the session data if it exists.
  - `/destroy-session`: Destroys the current session, effectively logging out the user or clearing session data.

### Session Stores

For production use, you'll typically configure a session store like Redis or MongoDB:

- **Redis**: Use the `connect-redis` package.
- **MongoDB**: Use the `connect-mongo` package.

Example with Redis:

```bash
npm install connect-redis redis
```

```javascript
const RedisStore = require('connect-redis')(session);
const redis = require('redis');
const redisClient = redis.createClient();

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));
```

This setup ensures that session data is persisted in Redis, making it scalable and suitable for production environments.

# Next Topic

[Authentication (Passport module)](https://github.com/Aakash-Tamboli/Node-Learning/tree/master/express-framework/Learning-Express/Topic-Wise/13-Authentication)
