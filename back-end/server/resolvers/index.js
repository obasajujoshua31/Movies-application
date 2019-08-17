const { createUser, login } = require("./user");
const { movies, onemovie } = require("./movie");

// Resolvers
module.exports = {
  resolvers: {
    Mutation: {
      createUser,
      login,
    },
    Query: { movies, onemovie },
  },
};
