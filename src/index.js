require("donenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const init = async () => {
  const DB_NAME = process.env.DB_NAME;
  const MONGODB_URI =
    process.env.MONGODB_URI || `mongodb://localhost:27017/${DB_NAME}`;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect(MONGODB_URI, options);
  //connect to MongoDB
  const { url } = await server.listen({ port: PORT });
  console.log(`🚀  Server ready at ${url}`);
};

init();
