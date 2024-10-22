import Router from 'express';

const route = Router();

route.get("/login",(request,response)=>{
    response.cookie("hello","world",{signed: true});
    response.status(200).send({"msg":"You are successfully logged in"})
})

route.get("/feed",(request,response)=>{
    if(request.signedCookies.hello && request.signedCookies.hello === "world") response.status(200).send({"msg": "Logged in"})
    else response.status(401).send({"msg": "Not Logged in"})    
})


export default route;