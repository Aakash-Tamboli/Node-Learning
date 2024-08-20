const express = require('express');
const archiver = require('archiver');
const path = require('path');
const fs = require('fs');

const app = express();

app.set("view engine","ejs");

app.get("/",(request,response)=>{
response.render("index.ejs",{title: "HOME", link: "/downloadFolder"});
});

app.get("/downloadFolder",(request,response)=>{
const zipName = "TMFoldersZip";
const output = fs.createWriteStream(zipName);
const archive = archiver("zip",{
zlib: { level: 9}
});

output.on("close",()=>{
response.download(zipName,(error)=>{
if(error)
{
console.log('Error sending zip file: ',err);
}
fs.unlinkSync(zipName);
});
}); // on method

archive.on('error',err => {
    throw err;
});

archive.pipe(output);

const folders = ['abc','downloadable-resources'];
folders.forEach(folder => {
    archive.directory(path.join(__dirname,folder), folder);
})

archive.finalize();

});



const PORT = 5000;
app.listen(PORT,()=>{
console.log(`Server is listening at ${PORT}...`);
});
