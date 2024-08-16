const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./strategies/local-strategy.js');
const app = express();
app.use(express.json());
app.use(session({
secret: "Secret Key",
resave: false,
saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


app.post("/api/authenticate",passport.authenticate('local'),(request, response)=>{
response.status(200).send({"msg":"You are Authentic user"});
});

app.get("/api/authentication/status",(request,response)=>{
if(!request.user) response.sendStatus(401);
else response.send({"msg": 'You authentication status is ok'});
});



const PORT = 5000;
app.listen(PORT,()=>{
console.log("Server is listening at "+PORT+"...");
});
