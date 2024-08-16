# EJS Tutorial

This project is a simple tutorial to get you started with EJS (Embedded JavaScript) templating in a Node.js application.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
  - [Setting up Express Server](#setting-up-express-server)
  - [Creating an EJS Template](#creating-an-ejs-template)
  - [Running the Application](#running-the-application)
- [Understanding EJS Syntax](#understanding-ejs-syntax)
- [Including Partials](#including-partials)
- [Passing Data to Templates](#passing-data-to-templates)
- [Using EJS without Express](#using-ejs-without-express)
- [Next Steps](#next-steps)

## Introduction

EJS (Embedded JavaScript) is a templating language that allows you to generate HTML markup with plain JavaScript. It is commonly used in web applications to create dynamic content that is rendered on the server side.

## Installation

To install EJS in your Node.js project, run the following command:

```bash
npm install ejs
```

## Basic Usage

### Setting up Express Server

First, create a simple Express server and configure it to use EJS as the templating engine.

```javascript
const express = require('express');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Define a route
app.get('/', (req, res) => {
    res.render('index', { title: 'My EJS Page', message: 'Hello, World!' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

### Creating an EJS Template

Next, create a file named `index.ejs` in the `views` directory:
```bash
/project
  ├── views
  │   └── index.ejs
  ├── app.js
  └── package.json

```
`index.ejs -`
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1><%= message %></h1>
</body>
</html>
```

### Running the Application

To run the application, execute the following command:

```bash
node app.js
```

Open your browser and visit `http://localhost:3000`. You should see the "Hello, World!" message.

## Understanding EJS Syntax

- `<%= %>`: Outputs the value into the template, escaping it to prevent XSS attacks.
- `<%- %>`: Outputs the unescaped value (use with caution).
- `<% %>`: Executes JavaScript code without outputting anything.

### Example with Logic

```ejs
<ul>
  <% for(let i = 0; i < items.length; i++) { %>
    <li><%= items[i] %></li>
  <% } %>
</ul>
```

This example renders an unordered list based on the `items` array passed to the template.

## Including Partials

You can include other templates as partials to reuse common elements like headers and footers.

```ejs
<%- include('header') %>

<h1>Main Content Here</h1>

<%- include('footer') %>
```

## Passing Data to Templates

You can pass data to your EJS templates by providing an object as the second argument to the `render` function.

```javascript
res.render('index', { title: 'EJS Example', user: { name: 'John Doe' } });
```

In the EJS template:

```ejs
<h1>Welcome, <%= user.name %>!</h1>
```

This renders:

```html
<h1>Welcome, John Doe!</h1>
```

## Using EJS without Express

You can use EJS to render static HTML files without Express.

```javascript
const ejs = require('ejs');
const fs = require('fs');

const template = fs.readFileSync('template.ejs', 'utf8');
const html = ejs.render(template, { title: 'Static EJS', message: 'This is static content.' });

console.log(html);
```

