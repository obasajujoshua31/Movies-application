const { createUser } = require("./user");

module.exports = {
  resolvers: {
    Mutation: {
      createUser,
    },
    Query: {},
  },
};
