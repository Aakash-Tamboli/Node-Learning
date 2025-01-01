const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [
      (value) => {
        return value.includes("@");
      },
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: [6, "Minimum password length is 6 character"],
  },
});

// mongoose hooks

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  // this reffer to document, which we are trying to create
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;