const { books } = require("./books");

const resolvers = {
  Query: {
    books,
  },
};

module.exports = resolvers;
