const { ApolloError } = require("apollo-server");
const axios = require("axios");

const books = async (_, { searchTerm }) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );

    const books = data?.items?.map((book) => {
      return {
        id: book?.id,
        title: book?.volumeInfo?.title || "N/A",
        authors: book?.volumeInfo?.authors || "N/A",
        description: book?.volumeInfo?.description || "N/A",
        pageCount: book?.volumeInfo?.pageCount,
        categories: book?.volumeInfo?.categories,
        averageRating: book?.volumeInfo?.averageRating,
        isEbook: book?.saleInfo?.isEbook,
      };
    });

    console.log(books);

    return books;
  } catch (error) {
    console.log(`[ERROR] Failed to resolve books | ${error.message}`);

    return new ApolloError("oops");
  }
};

const book = async (_, { bookId }) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}`
    );

    const book = {
      id: data?.id,
      title: data?.volumeInfo?.title || "N/A",
      authors: data?.volumeInfo?.authors || "N/A",
      description: data?.volumeInfo?.description || "N/A",
      pageCount: data?.volumeInfo?.pageCount,
      categories: data?.volumeInfo?.categories,
      averageRating: data?.volumeInfo?.averageRating,
      isEbook: data?.saleInfo?.isEbook,
    };
    return book;
  } catch (error) {
    console.log(`[ERROR] Failed to resolve book | ${error.message}`);

    return new ApolloError("oops");
  }
};

module.exports = {
  books,
  book,
};
