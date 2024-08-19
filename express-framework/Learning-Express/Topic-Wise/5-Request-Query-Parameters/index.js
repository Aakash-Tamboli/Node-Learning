const express = require('express');
const app = express();

app.set("view engine","ejs");

app.get("/",(request,response)=>{
    response.sendFile("/views/static/index.html",{root: __dirname})
})

app.get("/save",(request,response)=>{
    const {name,age,gender} = request.query;
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`)
    response.status(200).send("Check Your Terminal");    
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}...`)
})