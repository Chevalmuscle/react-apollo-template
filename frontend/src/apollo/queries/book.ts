import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      isPublished
    }
  }
`;

export { GET_BOOKS };
