const express = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWTService = require("../../utils/JWTUtils");

// const validateLogin = require("../../middleware/validateLogin.js");

const Graduate = require("../../models/graduate.model.js");

const router = express.Router();

router.post("/login", validateLogin, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).send({ message: "Login details are invalid." });

  const { email, password } = req.body;

  const exists = await Graduate.findOne({ email });

  if (!exists) return res.status(400).send({ message: "User does not exist." });

  const invalidPassword = bcrypt.compareSync(password, exists.password);

  if (!invalidPassword) {
    return res.status(400).send({
      accessToken: null,
      message: "Invalid password"
    });
  }

  const { JWT_SECRET } = process.env;

//   const token = jwt.sign({ id: exists._id }, JWT_SECRET, { expiresIn: 86400 });
  const token = JWTService.generateAccessToken(exists._id);

  return res.status(200).send({
    message: "Login successful",
    payload: { role: exists.role, accessToken: token }
  });

});

module.exports = router;
