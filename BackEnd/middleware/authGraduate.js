const Graduate = require("../models/graduate.model.js");
const JWTService = require("../utils/JWTUtils.js");

const authenticateGraduate = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token)
    return res.status(403).send({ message: "No access token provided." });

  const decoded = JWTService.verifyAccessToken(token);

  if (decoded instanceof Error || !decoded.userId)
    return res.status(403).send({ message: "Access token is invalid." });

  const user = await (async () => {
    try {
      return await Graduate.findById(decoded.userId);
    } catch (err) {
      return null;
    }
  })();

  if (!user) return res.status(404).send({ message: "User not found." });

  req.user = user;
  next();
};

module.exports = authenticateGraduate;
