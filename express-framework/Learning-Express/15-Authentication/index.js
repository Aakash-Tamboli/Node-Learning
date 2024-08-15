import express from 'express';
import passport from 'passport';
import session from 'express-session';

const app = express();
app.use(session({
    secret: "Secret Key",
    saveUninitialzed: false,
    resave: false
}));





const PORT = 5000;
app.listen(PORT,(err)=>{
    if(err) console.log(err);
    else console.log(`Server is listening at ${PORT}...`);
});
