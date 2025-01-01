const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
destination: function(request,file,call_back){
call_back(null,'./uploads');
},
filename: function(request,file,call_back){
call_back(null,`${Date.now()} - ${file.originalname}`);
}
});
const upload = multer({storage: storage});
const app = express();
app.set("view engine","ejs");

app.get("/",(request,response)=>{
response.render("index",{title: "upload", message: "Eg.of Upload"});
});

app.post('/upload',upload.single('file'),(request,response)=>{
response.send("<h1>File Uploaded successfully</h1>");
});


const PORT = 5000;
app.listen(PORT,()=>{
console.log("Server is listening at "+PORT+"...");
});
