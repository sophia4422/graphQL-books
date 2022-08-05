const axios = require("axios");
const books = async (parent, { searchTerm }, context) => {
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
  }
};

module.exports = {
  books,
};
