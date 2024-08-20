# Express.js POST Request Handling(NOT JSON)

This guide explains how to handle POST requests in an Express.js application and access the data sent in the request body.

## Prerequisites

- [Node.js](https://nodejs.org/en/) installed
- [Express.js](https://expressjs.com/) installed

## Installation

First, install Express in your project:

```bash
npm install express
```

## Creating a Basic Express Application

Create a file named `app.js` and add the following code:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Handle POST request to /submit
app.post('/submit', (req, res) => {
    const data = req.body; // Access the data sent in the POST request
    console.log(data); // Log the received data to the console

    // Send a response back to the client
    res.send('Data received');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```

## How It Works

1. **`express.urlencoded({ extended: true })` Middleware**: Parses URL-encoded data (e.g., form submissions). Setting `extended: true` allows for the parsing of rich objects and arrays.
2. **POST Request Handling**: The `/submit` route handles POST requests. Data sent in the request body (whether JSON or URL-encoded) is accessed using `req.body`.

## Sending a POST Request

You can send a POST request to your Express server using tools like [Postman](https://www.postman.com/), [Curl](https://curl.se/), or a frontend form.

### Example using `curl`:

```bash
curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name": "John", "age": 30}'
```

This command sends a JSON object with `name` and `age` to your Express server.

## Running the Application

1. Save the `app.js` file.
2. Run the application using the following command:

```bash
node app.js
```

3. Your server will start running at `http://localhost:3000`.
4. Send a POST request to `http://localhost:3000/submit` and check the console for the logged data.

## Next Topic

[POST With JSON](https://github.com/Aakash-Tamboli/Node-Learning/tree/master/express-framework/Learning-Express/Topic-Wise/7-POST-JSON)

