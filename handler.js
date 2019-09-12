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
  playground: true,
  cors: {
    origin: "*",
    credentials: true
  }
});

exports.handler = function(event, context, callback) {
  console.log("Type Of Event:", typeof event);
  console.log({ event });
  return lambda.handler(event, context, callback);
};
