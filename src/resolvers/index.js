const { books, book } = require("./books");

const resolvers = {
  Query: {
    books,
    book,
  },
};

module.exports = resolvers;
