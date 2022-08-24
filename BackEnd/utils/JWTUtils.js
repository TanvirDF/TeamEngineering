const jwt = require("jsonwebtoken");

const tokenOptions = {
  expiresIn: "14d",
};

class JWTUtils {
  static #getSecret = () => process.env.JWT_SECRET;

  static generateAccessToken(userId) {
    return jwt.sign({ userId }, this.#getSecret(), tokenOptions);
  }

  static verifyAccessToken(token) {
    try {
      return jwt.verify(token, this.#getSecret());
    } catch (err) {
      return err;
    }
  }
}

module.exports = JWTUtils;
