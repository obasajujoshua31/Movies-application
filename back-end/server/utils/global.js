const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
module.exports.hashPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports.comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

module.exports.generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
