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

exports.handler = function(event, context, callback) {
  console.log(typeof event);
  console.log(event);
  return lambda.handler(event, context, callback);
};
