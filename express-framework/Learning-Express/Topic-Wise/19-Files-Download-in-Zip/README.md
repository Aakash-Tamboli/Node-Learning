# Express-Zip Package

This project demonstrates how to use the `express-zip` package in an Express.js application to compress files into a `.zip` archive and send them to the client.

## Setup

### 1. Create a New Project

Start by creating a new project directory and initializing it with npm:

```bash
npm init -y
```

### 2. Install Dependencies

Install the required packages:

```bash
npm install express express-zip
```

## Implementation

### 1. Create the Express Application

Create a file named `app.js` (or `index.js`) and set up a basic Express server:

```javascript
const express = require('express');
const zip = require('express-zip');
const path = require('path');

const app = express();
const port = 3000;

// Endpoint to zip and send files
app.get('/download', (req, res) => {
    const files = [
        { path: path.join(__dirname, 'files', 'file1.txt'), name: 'file1.txt' },
        { path: path.join(__dirname, 'files', 'file2.txt'), name: 'file2.txt' }
    ];
    /*  
	To change the name of the zip file sent to the client, 
        you can specify the desired name as the second argument in the res.zip() 
        function.
    */
    res.zip(files, 'archive.zip');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

### 2. Prepare Files to Zip

Create a directory named `files` in your project root and place a couple of text files (`file1.txt`, `file2.txt`, etc.) inside it.

### 3. Run the Application

Start your Express server:

```bash
node app.js
```

## Testing the Application

Open your browser and navigate to `http://localhost:3000/download`. The server should send a `archive.zip` file containing `file1.txt` and `file2.txt` to the client.

## Dynamic File Names

You can also create routes that allow dynamic file names. Here’s an example:

```javascript
app.get('/download/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const files = [
        { path: path.join(__dirname, 'files', `${fileName}.txt`), name: `${fileName}.txt` }
    ];

    res.zip(files, `${fileName}-archive.zip`);
});
```

This route will allow users to download a zip file with the name they specify in the URL.
