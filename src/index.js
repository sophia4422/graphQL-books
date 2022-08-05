const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const init = async () => {
  const { url } = await server.listen({ port: PORT });
  console.log(`🚀  Server ready at ${url}`);
};

init();
