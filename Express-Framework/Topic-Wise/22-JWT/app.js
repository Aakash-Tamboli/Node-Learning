const express = require('express');
const dotEnv = require('dotenv');

// /Config/DBConnection
function connectDB()
{
try
{
const CONNECTION_URL=process.env.CONNECTION_URL;
const connection=mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
console.log("Connection Established with DB");
}catch(err)
{
console.log(err);
process.exit(0);
}
}
// /Config/DBConnection

// /models/User.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
email:{
type: String,
required: [true, 'Please enter an email'],
unique: true,
lowercase: true,
validate: [(value)=> { return value.includes('@'); }, 'Please enter a valid email']
},
password:{
type: String,
required: [true, 'Please provide password'],
minlength: [6, 'Minimum password length is 6 character']
}
});

const userModel = mongoose.model('user',userSchema);

// module.exports = userModel;
// /models/User.js



// /controllers/authController.js
// const userModel = require('PATH');

const signupForGET = (request,response) => {
response.render('signup');
}
const loginForGET = (request,response) => {
response.render('login');
}
const signupForPOST = async (request,response) => {
const {email, password} = request.body;
try
{
const user = await userModel.create({email, password});
response.status(201).json(user);
}catch(error)
{
console.log(error);
response.status(400).send("Error aa gya hai"); // later on handle in professional standard manner
}
}

const loginForPOST = async (request,response) => {
const {email, password} = request.body;
console.log(email,password);
response.send('use login');
}

// module.export = { THOSE FUNCTION NAMES }
// /controllers/authController.js



// /routes/authRoutes.js
// const express = require('express');
// const {NAME OF FUNCTIOn} = require('PATHOFCONTROLLER');
const router = express.Router();

router.get('/signup',signupForGET);
router.post('/signup',signupForPOST);
router.get('/login',loginForGET);
router.post('/login',loginForPOST);


// module.exports = router;
// /routes/authRoutes.js



// app.js code
// const authRoutes = require('PATH_OF_AUTHROUTES');

dotEnv.config();
connectDB();

const PORT = 3000;
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(router);


// view engine
app.set('view engine', 'ejs');

app.listen(PORT,()=>{
console.log(`HTTP Server is listeing at ${PORT}...`);
});


// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

