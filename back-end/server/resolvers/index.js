const { createUser, login } = require("./user");

// Resolvers
module.exports = {
  resolvers: {
    Mutation: {
      createUser,
      login
    },
    Query: {},
  },
};
