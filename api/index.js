const { GraphQLServerLambda } = require("graphql-yoga");

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "world"}`
  }
};

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
  cors: {
    origin: "*",
    credentials: true
  },
  playground: true,
  endpoint: "/"
});

exports.handler = lambda.handler;
