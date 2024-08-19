const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}))

app.get("/",(request,response)=>{
    response.sendFile("/views/static/index.html",{root: __dirname})
})

app.post("/addUser",(request,response)=>{

    const {name,age,gender} = request.body;
    
    console.log(`Received -> Name: ${name}, Age: ${age}, Gender: ${age}`)

    response.status(200).send("Check Terminal")
})


const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})