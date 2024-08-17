import express from 'express';

const app = express();

const database = {
"school":["Aakash","Gautam","Tina","Beena"],
"college":["Shubham","Tushar","Aayush"]
}

/*
localhost:5000/api/studentExists/school/Aakash
institute contains school
studentName contains Aakash
personal finding

I think params feature is used to resolve sub-path requests.
eg:
localhost:5000/api/studentExists/school/Aakash then in request.params -
school will be stored against institute key
Aakash will be stored against studentName key
as we specified in /api/studentExists/:institute/:studentName

BUT here is Important thing -
if user won't provide those sub-paths after "/api/studentExists/--here"
then express will send cannot find GET/POST/Whatever type then URL
that's behaviour.
*/

app.get("/api/studentExists/:institute/:studentName",(request,response)=>{
const params = request.params;
const {institute,studentName} = params;
// I know code quality is not good but Writing good code is not my intension while learning express.js

if(!institute || !studentName) response.status(404).send("1 Not Found");
else if(!database[institute]) response.status(404).send("2 Not Found");
else if(!database[institute].find((student)=> student===studentName)) response.status(404).send("3 Not Found");
else response.status(200).send("Yes Student Exists");
});

const PORT = 5000;
app.listen(PORT,()=>{
console.log("Server is listening at: "+PORT+"....");
});
