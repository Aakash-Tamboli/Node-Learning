const express = require('express');
const records = require('./db/mock-data.js').mockData;
const personRoutes = require('./routes/person/routes.js').route;
const app = express();

app.use(personRoutes);

app.get('/',(req,res)=>{
res.status(200).send(records);
});


const PORT = 5000;
app.listen(PORT,()=>{
console.log(`Server is listening at ${PORT}...`);
});
