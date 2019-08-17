const { generateToken } = require("../utils/global");

// method to find user
const findUser = async (context, username) => {
  return await context.findUser({ username });
};

// method to generate token and return the user
const userDetails = user => {
  return {
    token: generateToken(user.id),
    user,
  };
};

// resolver to create new user
const createUser = async function(parent, args, context, info) {
  const foundUser = await findUser(context, args.username);
  if (foundUser) {
    throw new Error("Username is not available");
  }

  const user = await context.createNewUser({ ...args });
  return userDetails(user);
};


// resolver to login user
const login = async function(parent, args, context, info) {
  const foundUser = await findUser(context, args.username);
  if (!foundUser) {
    throw new Error("Invalid Credentials");
  }

  if (!foundUser.matchPassword(args.password)) {
    throw new Error("Invalid Credentials");
  }

  return userDetails(foundUser);
};

module.exports = {
  createUser,
  login,
};
