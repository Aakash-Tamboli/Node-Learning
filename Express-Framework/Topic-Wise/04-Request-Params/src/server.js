import express from 'express';

const app = express();

const database = {
"school":["Aakash","Gautam","Tina","Beena"],
"college":["Shubham","Tushar","Aayush"]
}

app.get("/api/studentExists/:institute/:studentName",(request,response)=>{
const params = request.params;
const {institute,studentName} = params;

if(!institute || !studentName) response.status(404).send("1 Not Found");
else if(!database[institute]) response.status(404).send("2 Not Found");
else if(!database[institute].find((student)=> student===studentName)) response.status(404).send("3 Not Found");
else response.status(200).send("Yes Student Exists");
});

const PORT = 5000;
app.listen(PORT,()=>{
console.log("Server is listening at: "+PORT+"....");
});
