const books = () => {
  return [
    {
      id: "123",
      title: "Foo Bar",
      authors: ["Fupa", "Woo"],
      description: "This is a description",
      pageCount: 222,
      categories: ["Coding"],
      averageRating: 2.5,
      isEbook: false,
    },
    {
      id: "456",
      title: "Foo Bob Smith",
      authors: ["Dave", "Ishmael"],
      description: "This is a book description",
      pageCount: 224,
      categories: ["Coding"],
      averageRating: 5.0,
      isEbook: true,
    },
  ];
};

module.exports = {
  books,
};
