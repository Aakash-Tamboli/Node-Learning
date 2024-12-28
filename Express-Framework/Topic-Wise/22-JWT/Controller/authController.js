const userModel = require("../Model/User");

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
    response.status(201).json(user);
  } catch (error) {
    console.log(error);
    response.status(400).send("Unable to create a account"); // later on handle in professional standard manner
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
