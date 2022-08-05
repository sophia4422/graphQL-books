const axios = require("axios");
const books = async (parent, { searchTerm }, context) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  );

  const books = data?.items?.map((book) => {
    return {
      id: book?.id,
      title: book?.volumeInfo?.title,
      authors: ["Fupa", "Woo"],
      description: "This is a description",
      pageCount: 222,
      categories: ["Coding"],
      averageRating: 2.5,
      isEbook: false,
    };
  });

  console.log(books);

  return books;
};

module.exports = {
  books,
};
