# Express Static File Server

This project demonstrates how to set up an Express.js application to serve static files, such as CSS and JavaScript, from a designated public folder. 

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Code Explanation](#code-explanation)
- [Running the Application](#running-the-application)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Project Structure

The following directory structure is used:

```
my-express-app/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
└── server.js
```

## Installation

1. Create a new directory for your project:

   ```bash
   mkdir my-express-app
   cd my-express-app
   ```

2. Initialize a new Node.js project:

   ```bash
   npm init -y
   ```

3. Install Express:

   ```bash
   npm install express
   ```

## Code Explanation

The core of the application is located in the `server.js` file, which contains the following code:

```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// A simple route to test the server
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Key Components:

- **Static Files Middleware**: The line `app.use(express.static(path.join(__dirname, 'public')));` serves static files from the `public` directory.
- **Route Handling**: The route `app.get('/', ...)` serves the main HTML file when accessing the root URL.

The `public` directory contains the following files:

- **CSS File (`styles.css`)**: Styles the HTML content.
- **JavaScript File (`script.js`)**: Contains client-side scripts.

### Example HTML File

In the `public` folder, an `index.html` file is provided for testing:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/styles.css">
    <title>Express Static Files</title>
</head>
<body>
    <h1>Hello, Express!</h1>
    <script src="/js/script.js"></script>
</body>
</html>
```

## Running the Application

To start the server, execute the following command in your terminal:

```bash
node server.js
```

Once the server is running, open your web browser and navigate to `http://localhost:3000` to view the application.

## Conclusion

This project serves as a fundamental example of how to use Express.js to handle static files. It can be expanded upon by adding more routes, middleware, and additional functionalities as required.

## Next Topic

[Flash](../21-Flash/README.md)

