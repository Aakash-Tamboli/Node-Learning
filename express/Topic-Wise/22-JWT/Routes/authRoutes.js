const express = require("express");
const {
  signupForGET,
  signupForPOST,
  loginForGET,
  loginForPOST,
} = require("../Controller/authController");
const router = express.Router();

router.get("/signup", signupForGET);
router.post("/signup", signupForPOST);
router.get("/login", loginForGET);
router.post("/login", loginForPOST);

module.exports = router;
