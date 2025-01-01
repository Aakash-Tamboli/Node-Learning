## Installation

First, install `multer` using npm:

```bash
npm install multer
```

## Basic Setup

### 1. Setting Up an Express Application

Create an Express application:

```javascript
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### 2. Importing and Configuring Multer

Import `multer` and configure the storage settings:

```javascript
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 1st arg for error , and 2nd for specify the directory to save files IMP. this uploads folder will not creat by multer you have to either write logic or manuel create it
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); //  1st arg for error , and 2nd unique name for the file so that users can upload as many file they want without clashes
  }
});

const upload = multer({ storage: storage });
```

### 3. Creating Routes for File Uploads

#### Single File Upload

Create a route to handle single file uploads:

```javascript
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});
```

#### Multiple File Uploads

Create a route to handle multiple file uploads:

```javascript
// upload.array('files', 12) it means 12 files can be upload, if user go beyond then you have to handle errors because it logs on server console.
app.post('/uploads', upload.array('files', 12), (req, res) => {
  res.send('Files uploaded successfully');
});
```

### 4. Testing File Upload

Create a simple HTML form to test file uploads:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>File Upload</title>
</head>
<body>
<!-- method="post" enctype="multipart/form-data" it is imp. acc. to docs -->
  <form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">Upload</button>
  </form>
</body>
</html>
```

Serve the HTML form using Express:

```javascript
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
```

## Summary

1. Install Multer with `npm install multer`.
2. Set up storage configuration with `multer.diskStorage`.
3. Use `upload.single` or `upload.array` in your route handlers to manage file uploads.
4. Test with an HTML form.

# Next Topic

[Client can Download files](../16-Download/README.md)
