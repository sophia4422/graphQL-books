const { books, book, createBook } = require("./books");

const resolvers = {
  Query: {
    books,
    book,
  },
  Mutation: {
    createBook,
  },
};

module.exports = resolvers;
