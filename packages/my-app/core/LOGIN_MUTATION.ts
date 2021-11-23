import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      id
      username
      name
      token
    }
  }
`;

export default LOGIN_MUTATION;
