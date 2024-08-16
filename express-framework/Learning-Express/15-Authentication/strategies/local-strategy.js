const passport = require('passport');
const Strategy = require('passport-local').Strategy;

passport.use(new Strategy((username,password,done)=>{
try
{
// Assume credentials are correct and we got corresponding object from db
const user = {
username: username,
password: password,
id: 101,
name: "Aakash"
};
done(null,user);
}catch(error)
{
done(error,null);
}
}));

passport.serializeUser((user,done)=>{
done(null,user.id);
});

passport.deserializeUser((id,done)=>{
try
{
// Now Assume when request arrived at sub-sequent protected path id is correct we got object that will be attached in request obj.

const user = {
name: "Aakash",
id: id
};
done(null,user);
}catch(error)
{
done(error,null);
}
});

module.exports= {passport}
