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

const REGISTER = gql`
  mutation register($data: RegisterInput!) {
    register(data: $data) {
      ${userFields}
    }
  }
`;

export { LOGIN, REGISTER };
