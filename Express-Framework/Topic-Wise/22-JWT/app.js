const express = require("express");
const dotEnv = require("dotenv");
const connectDB = require('./Config/DBConnection');
const router = require('./Routes/authRoutes');

// invoking configure functions
dotEnv.config();
connectDB();

// get instance of express app
const PORT = process.env.PORT || 3000;
app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(router);

// view engine
app.set("view engine", "ejs");


app.listen(PORT, () => {
  console.log(`HTTP Server is listeing at ${PORT}...`);
});

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));

