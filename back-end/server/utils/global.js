const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const randomString = require("randomstring");

dotenv.config();
module.exports.hashPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports.comparePassword = (password, dbPassword) =>
  bcrypt.compareSync(password, dbPassword);

module.exports.generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);

module.exports.generateString = () =>
  randomString.generate({
    length: 7,
    charset: "alphabetic",
  });

module.exports.verifyToken = token => {
  if (typeof token === "undefined") {
    throw new Error(
      "Authentication token should be provided to get field scoutbase_rating"
    );
  }
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid Token is provided");
  }
};
