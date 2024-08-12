import express from 'express';
const app = express();

// setting middleware
app.use(express.json());

const database = [
{id:1,username:"Aakash",gender:'M'},
{id:2,username:"Sanjay",gender:'M'},
{id:3,username:"Beena",gender:'F'},
];

app.put("/api/users/:id",(request,response)=>{
const {body} = request;
const {username,gender} = body;
const id=request.params.id;
const nId=parseInt(id);
if(isNaN(nId)) return response.sendStatus(400);
const index=database.indexOf((user)=>{
console.log(user.id+"==="+nId);
return user.id === nId
});
if(index===-1) return response.sendStatus(404);
console.log("index value is: "+index);
database[index] = {id:nId, username: username,gender: gender};
console.log("After chaning: ");
console.log(database);
response.sendStatus(204);
});

const PORT = 5000;
app.listen(PORT,()=>{
console.log("Server is listening at: "+PORT+"...");
});
