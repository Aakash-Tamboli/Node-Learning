const express = require('express');
const path = require('path');

const app = express();

app.get('/download',(request,response)=>{
const filePath=path.join(__dirname,"uploads","example.png");
response.download(filePath,(error)=>{
if(error)
{
console.error(`Unable to send File to client`)
response.status(500).send(`Unable to download File`);
}
});
});




const PORT = 5000;
app.listen(PORT,()=>{
console.log(`Server is listening at ${PORT}...`);
});
