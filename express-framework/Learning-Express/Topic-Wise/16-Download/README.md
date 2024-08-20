# Express App to Download Files

## 1. Set Up Your Project
First, you'll need to set up your Node.js project.

```bash
npm init -y
npm install express
```

## 2. Create the Express App
Create a file named `app.js` and add the following code:

```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the download route
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'example.txt'); // Adjust the path and filename as needed
    res.download(filePath, (err) => {
        if (err) {
            console.error('File failed to download:', err);
            res.status(500).send('Error downloading file.');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

## 3. Create the File to Download
Create a directory named `files` inside your project folder and add the file you want to be downloadable (e.g., `example.txt`).

Your project structure should look like this:

```
express-download/
│
├── files/
│   └── example.txt
│
├── app.js
└── package.json
```

## 4. Run the Server
Start your Express app by running:

```bash
node app.js
```

## 5. Test the Download
Open your browser and go to `http://localhost:3000/download`. The file `example.txt` should start downloading.

## Customizing the Download
- **Different file types:** You can modify the `filePath` to point to any type of file.
- **Dynamic filenames:** You can add query parameters or URL parameters to allow users to specify which file to download.

## Additional Tips
- If your files are large or served from an external source, consider using streaming methods.
- Ensure proper error handling, especially if the files are being generated dynamically or fetched from a remote server.

# Next Topic

[Client can Download folder structure as zip using Achiver module](https://github.com/Aakash-Tamboli/Node-Learning/tree/master/express-framework/Learning-Express/Topic-Wise/17-Files-Download-in-Zip)
