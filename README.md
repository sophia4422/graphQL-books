# graphQL-books

learning graphQL

```
query ExampleQuery($bookId: ID!) {
  book(bookId: $bookId) {
    id
    title
    authors
    description
    pageCount
    categories
    averageRating
    isEbook
  }
}
```
