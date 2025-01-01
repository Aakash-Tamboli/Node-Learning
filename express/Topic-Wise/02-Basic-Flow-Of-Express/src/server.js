import express from 'express';

const app = express();

app.get("/api/users",(request,response)=>{
const users = [{id:101,username:"Aakash"},{id:102,username:"Gautam"},{id:103,username:"Verendra"}];
response.status(200).send(users);
});

app.get("/api/products",(request,response)=>{
const products = [];
products.push({"productId":"pro11","productName":"Lamp"});
products.push({"productId":"pro22","productName":"Laptop"});
response.status(200).send(products);
});



const PORT = 5000;
app.listen(PORT,()=>{
console.log("Server is listening at: "+PORT+"...");
});
