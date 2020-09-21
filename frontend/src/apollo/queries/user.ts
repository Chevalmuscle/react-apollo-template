import { gql } from "@apollo/client";
import { userFields } from "../fields";

const GET_USERS = gql`
  query GetUsers {
    users {
      ${userFields}
    }
  }
`;

export { GET_USERS };
