const { GraphQLServer } = require("graphql-yoga");
const services = require("./services");
const resolvers = require("./resolvers");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

// Configure Graphql Server
const server = new GraphQLServer({
  typeDefs: "./server/schema.graphql",
  ...resolvers,
  context: request => {
    return {
      ...request,
      ...services,
    };
  },
});

// Extra options for Grapqhl Server
const options = {
  port: PORT,
  endpoint: "/graphql",
};

server.start(options, ({ port: PORT }) =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
