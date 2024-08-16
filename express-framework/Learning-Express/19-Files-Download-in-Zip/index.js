const express = require('express');
const path = require('path');
require('express-zip');

const app = express();
app.set("view engine","ejs");

app.get("/",(request,response)=>{
response.render("index",{ link: "/downloadZip"});
});

app.get("/downloadZip",(request,response)=>{
const files = [
{ path: path.join(__dirname,'downloadable-resources', 'package.json'), name:'package.json'},
{ path: path.join(__dirname,'downloadable-resources', 'package-lock.json'), name: 'package-lock.json'}
];
response.zip(files,"TMArchive.zip");
});


const PORT = 5000;
app.listen(PORT,()=>{
console.log(`Server is listening ${PORT}...`);
});
