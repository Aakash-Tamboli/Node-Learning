import express from 'express';

const app = express();

app.use(express.json());

app.post("/api/addUser",(request,response)=>{
console.log(request.body);
response.status(201).send("Testing");
});

const PORT = 5000;
app.listen(PORT,()=>{
console.log("Server is running at: "+PORT+"...");
});
