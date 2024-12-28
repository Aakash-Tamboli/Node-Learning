const mongoose = require('mongoose');
const dotEnv = require('dotenv');

function connectDB() {
  try {
    const CONNECTION_URL = process.env.CONNECTION_URL;
    const connection = mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Established with DB");
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
}

module.exports = connectDB;