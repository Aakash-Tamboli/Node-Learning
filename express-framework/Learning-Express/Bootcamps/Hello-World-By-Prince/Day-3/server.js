const express = require('express');
const app = express();


app.get("/",(req,res)=>{
res.send("Welcome to my hotel..How can I help you");
});


app.get("/chicken",(req,res)=>{
res.send("Sure sir, I would love to serve chicken");
});

app.get("/idli",(req,res)=>{
const idli = {
name: "Rava Idli",
size: "50 cm diameter",
isSambhar: true,
isChutney: true
};
res.send(idli);
});

const PORT = 5000;
app.listen(PORT,()=>{
console.log(`Server is listening at ${PORT} ...`);
});
