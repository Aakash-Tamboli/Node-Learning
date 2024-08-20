# Passport Authentication Setup

This guide provides steps to set up user authentication using the `passport` and `passport-local` packages in a Node.js application.

## Fundamental Requirement
Hence credenitals will come in POST type request,So you know very well how to use express.json() or how to extract value from body

## Installation

First, install the necessary packages:

```bash
npm install passport passport-local
```

- **passport-local**: Enables user authentication using a username and password, known as the local strategy.
- **passport**: Includes various packages for third-party authentication (e.g., Google, Facebook) and integrates seamlessly with session middleware.

## Configuration

### Initialize Passport

Set up Passport after session middleware and before route middleware in your `app.js` or `server.js`:

```javascript
app.use(passport.initialize()); // Initializes Passport
app.use(passport.session()); // Enables Passport with sessions
```

### Create Authentication Strategy

Create a folder named `strategy` and within it, create a file named `local-strategy.js`:

```javascript
import passport from 'passport';
import { Strategy } from 'passport-local';

// Configure the local strategy
passport.use(
  /*
    new Strategy(options,call_back);
    When a request arrives, Passport will extract the username and password
    from req.body and call our callback function.
    Options play a role here. If "email" is used as the username in the req.body then
    specify in the options like:
    new Strategy({ usernameField: "email" }, callback)
    then 
    Passport will look for the "email" property in req.body instead of "username"
    before calling the callback.
  */
  new Strategy((username, password, done) => {
    try {
      // Check if the username exists in the database
      if (/* username is not present in the database */) {
        throw new Error("Invalid username");
      }

      // Check if the password is correct
      if (/* password is not correct */) {
        throw new Error("Invalid Credentials");
      }

      // If the user is found, pass the user to the done function
      const user = /* user found in the database */;
      done(null, user); // Pass null and the user if everything is fine
    } catch (error) {
      done(error, null); // Pass the error and null if an error occurs
    }
  })
);

// Serialize user to store in session
passport.serializeUser((user, done) => {
  /*
  The serializeUser method sets a unique attribute of the user inside the session.
  It is executed after the authentication method is called.
  */
  done(null, user.id); // Store the user ID in the session
});

// Deserialize user from session
passport.deserializeUser((id, done) => {
  /*
  The deserializeUser method retrieves the user from the database based on the ID
  and attaches the user object to the request object on subsequent requests.
  */
  try {
    // Check if the ID exists in the database
    if (/* ID is not present in the database */) {
      throw new Error("User not found");
    }
    
    // Retrieve the user from the database
    const user = /* user found in the database */;
    done(null, user); // Attach the user object to the request
  } catch (error) {
    done(error, null); // Pass the error and null if an error occurs
  }
});
```

### Set Up Authentication Endpoint

Configure the authentication mechanism for the login endpoint:

```javascript
app.post("/api/authenticate", passport.authenticate('local'), (req, res) => {
  // REQUEST_HANDLER logic here
});
```

**Note:** Replace `'local'` in `passport.authenticate()` with the strategy you are using (e.g., 'google', 'github', 'facebook') if applicable.

### Protect Routes

To ensure that the user object is available in `req.user` for authentication checks, use the following approach in your routes:

```javascript
app.get("/api/anyEndPoint", (req, res) => {
  if (!req.user) {
    // User is not authenticated
    // Handle unauthenticated request
  }
  // ... logic to handle the request
});
```

This ensures that the user object is available in `req.user` for further logic, simplifying authentication checks throughout the application.

## Next Topic

[EJS](https://github.com/Aakash-Tamboli/Node-Learning/tree/master/express-framework/Learning-Express/Topic-Wise/14-EJS)

