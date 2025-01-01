const userModel = require("../Model/User");
const jwt = require('jsonwebtoken');

// helper function
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) =>{
  return jwt.sign({id},'God is Great', {
    expiresIn: maxAge,
  });
}

const signupForGET = (request, response) => {
  response.render("signup");
};
const loginForGET = (request, response) => {
  response.render("login");
};

const signupForPOST = async (request, response) => {
  const { email, password } = request.body;
  try {
    const user = await userModel.create({ email, password });
    const token = createToken(user._id);
    response.cookie('jwt',token,{
      httpOnly: true,
      maxAge: maxAge * 1000
    })
    response.status(201).json({
      user: user._id
    });
  } catch (error) {
    for(let i=0;i<1000;i++) console.log(i);
    console.log(error);
    response.status(400).json({message: 'unable to create your account'}); // later on handle in professional standard manner
  }
};

const loginForPOST = async (request, response) => {
  const { email, password } = request.body;
  console.log(email, password);
  response.send("use login");
};

module.exports = {
  signupForGET,
  loginForGET,
  signupForPOST,
  loginForPOST
};
