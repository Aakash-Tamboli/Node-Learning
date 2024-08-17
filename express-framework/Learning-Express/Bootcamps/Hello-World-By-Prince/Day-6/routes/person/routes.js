const express = require('express');
const records = require('../../db/mock-data.js').mockData;
const route = express.Router();

route.get('/api/person/:profession',(req,res)=>{
const profession = req.params.profession;
const data = records.find( (person) => profession===person.work);
if(!data || data.length===0) res.status(404).send(`Any ${profession} not found`);
else res.status(200).send(data);
});

module.exports = { route: route };
