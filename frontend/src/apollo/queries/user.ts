import { gql } from "@apollo/client";

const userFields = `
  id
  firstName
  lastName
  email
  name
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      ${userFields}
    }
  }
`;

export { GET_USERS };
