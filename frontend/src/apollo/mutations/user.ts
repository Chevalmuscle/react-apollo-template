import { gql } from "@apollo/client";
import { userFields } from "../fields";

const LOGIN = gql`
  mutation login($data: LoginInput!) {
    login(data: $data) {
      ${userFields}
      token
    }
  }
`;

export { LOGIN };
