const express = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const JWTUtils = require("../utils/JWTUtils");

const validateLogin = require("../middleware/validateLogin.js");

// const Graduate = require("../models/graduate.model.js");
const users = require("../models/auth.model");
const router = express.Router();
router.use(express.json());
// router.post("/login", validateLogin, async (req, res) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty())
//     return res.status(400).send({ message: "Login details are invalid." });

//   const { email, password } = req.body;

//   const exists = await users.findOne({ email });

//   if (!exists) return res.status(400).send({ message: "User does not exist." });

//   const invalidPassword = bcrypt.compareSync(password, exists.password);

//   if (!invalidPassword) {
//     return res.status(400).send({
//       accessToken: null,
//       message: "Invalid password"
//     });
//   }

//   const token = JWTUtils.generateAccessToken(exists._id);

//   return res.status(200).send({
//     message: "Login successful",
//     payload: { accessToken: token }
//   });

// });


router.route('/')
  .post((req, res) => {
    const { email, password } = req.body;
    // console.log(email)
    users.findOne({ email }, (err, user) => {
      if (user && password === user.password) {
        res.send({ message: `Login Success`, user });
      }
      else if (user) {
        res.send({ message: `Your password is incorrect` });
      }
      else {
        res.send({ message: `You need to SignUp before logging in` });
      }
    });
  })

module.exports = router;
