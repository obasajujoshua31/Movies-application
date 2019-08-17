const { User } = require("../database/models");
const { findSingle, save } = require("./base");


// A service to create new user
module.exports.createNewUser = async user => {
  return await save(User, user);
};


// A service to find User by options
module.exports.findUser = async options => {
  return await findSingle(User, options);
};
