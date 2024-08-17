const express = require('express');
const fs = require('fs');
const path = require('path');
require('express-zip');

const app = express();
app.set("view engine","ejs");

app.get("/",(request,response)=>{
response.render("index",{ link1: "/downloadFiles", link2: "/downloadFolder"});
});

app.get("/downloadFiles",(request,response)=>{
const files = [
{ path: path.join(__dirname,'downloadable-resources', 'package.json'), name:'package.json'},
{ path: path.join(__dirname,'downloadable-resources', 'package-lock.json'), name: 'package-lock.json'}
];
response.zip(files,"TMArchive.zip");
});

app.get("/downloadFolder",(request,response)=>{
const folderPath = path.join(__dirname,'abc');

fs.readdir(folderPath,(error,files)=>{
console.log("Hi 1");
if(error)
{
return response.status(500).send("Failed to read Directory");
}

console.log("Hi 2");

const zipFiles= files.map(file =>({
path: file,
name: path.relative(folderPath,file)
}));

console.log(" hi 3");
response.zip(zipFiles,"TMFolder.zip");

});
});

const PORT = 5000;
app.listen(PORT,()=>{
console.log(`Server is listening ${PORT}...`);
});
