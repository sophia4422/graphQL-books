const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    authors: [String]!
    description: String
    pageCount: Int
    categories: [String]
    averageRating: Float
    isEbook: Boolean
  }
  type Query {
    books(searchTerm: String!): [Book]
  }
`;

module.exports = typeDefs;
