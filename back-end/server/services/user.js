const { User } = require("../database/models");
const { findSingle, save } = require("./base");

module.exports.createNewUser = async user => {
  return await save(User, user);
};

module.exports.findUser = async options => {
  return await findSingle(User, options);
};
