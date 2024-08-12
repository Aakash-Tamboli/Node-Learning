import express from 'express';
import expressSession from 'express-session';
const app = express();

app.use(expressSession({
secret: "Thinking Machines is better",
resave: false,
saveUninitialized:false
}));

app.get("/",(request,response)=>{
if(!request.session.number) request.session.number=1;
else request.session.number=request.session.number+1;
response.status(200).send({"i": request.session.number});
});

const PORT = 5000;
app.listen(PORT,()=>{
console.log(`Server is listening at ${PORT}...`);
});
