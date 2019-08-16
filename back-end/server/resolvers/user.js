const { generateToken } = require("../utils/global");

const createUser = async function(parent, args, context, info) {
    const user = await context.createNewUser({ ...args });
    const token = generateToken(user.id);
    return {
      token,
      user,
    };
};

module.exports = {
  createUser,
};
