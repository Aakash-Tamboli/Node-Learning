import Router from 'express';

const route = Router();

route.get("/login",(request,response)=>{
response.cookie("hello","world");
response.status(200).send("You are logged in");
});

route.get("/feed",(request,response)=>{
if(request.cookies.hello && request.cookies.hello === "world") response.status(200).send({"msg":"You are logged in"});
else response.status(401).send({"msg":"Login First"});
});


export default route;
