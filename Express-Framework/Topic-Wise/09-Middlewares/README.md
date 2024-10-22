# Express.js Middleware Guide

This guide provides an overview of middleware in Express.js, including custom middleware, middleware chaining, and how to apply middleware to requests.

## What is Middleware in Express.js?

Middleware in Express.js are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. Middleware can:

- Execute any code.
- Modify the request and response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

Middleware functions are the backbone of an Express.js application and are used for tasks like logging, authentication, parsing request bodies, and error handling.

## Types of Middleware

1. **Built-in Middleware**: Express provides built-in middleware such as `express.json()` and `express.urlencoded()` for parsing incoming request bodies.

2. **Third-Party Middleware**: Middleware from third parties can be installed and used, such as `body-parser`, `cors`, `morgan`, etc.

3. **Custom Middleware**: You can create custom middleware functions to perform specific tasks tailored to your application’s needs.

## Creating Custom Middleware

A custom middleware is a function that takes three arguments: `req`, `res`, and `next`.

Example:
```javascript
function myLogger(req, res, next) {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Pass control to the next middleware or route handler
}

// Applying the middleware to all requests
app.use(myLogger);
```

In this example, `myLogger` logs the HTTP method and URL of incoming requests, then passes control to the next middleware or route handler by calling `next()`.

## Middleware Chaining

Middleware functions are executed in the order they are defined. This process is known as middleware chaining. If a middleware does not call `next()`, the request-response cycle will be halted.

Example:
```javascript
function firstMiddleware(req, res, next) {
    console.log("First Middleware");
    next(); // Pass control to the next middleware
}

function secondMiddleware(req, res, next) {
    console.log("Second Middleware");
    next(); // Pass control to the next middleware
}

app.use(firstMiddleware);
app.use(secondMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
```

When a request is made to the root URL (`/`), the output will be:

```
First Middleware
Second Middleware
```

And then the response "Hello World!" is sent.

## Applying Middleware

Middleware can be applied in various ways:

1. **Globally**: Middleware is applied to all routes in the application.
   ```javascript
   app.use(myLogger);
   ```

2. **Route-Specific**: Middleware can be applied to specific routes.
   ```javascript
   app.get('/user', myLogger, (req, res) => {
       res.send('User Page');
   });
   ```

3. **Router-Level**: Middleware can be applied to a group of routes using an `Express.Router`.
   ```javascript
   const router = express.Router();
   
   router.use(myLogger);
   
   router.get('/dashboard', (req, res) => {
       res.send('Dashboard');
   });
   
   app.use('/admin', router);
   ```

4. **Error-Handling Middleware**: This middleware is used to catch and handle errors in the application.
   ```javascript
   function errorHandler(err, req, res, next) {
       console.error(err.stack);
       res.status(500).send('Something broke!');
   }

   app.use(errorHandler);
   ```

## Conclusion

Middleware in Express.js provides a powerful mechanism to handle requests, responses, and errors. By understanding and using middleware effectively, you can build flexible, maintainable, and scalable Express.js applications. Custom middleware allows you to implement application-specific logic, while middleware chaining ensures that each request goes through a series of processing steps.

# Next Topic

[Express Validator](../10-Express-Validator/README.md)
