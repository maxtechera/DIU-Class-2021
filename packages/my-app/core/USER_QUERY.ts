import { gql } from "@apollo/client";

const USER_QUERY = gql`
  query Me {
    me {
      id
      username
      name
    }
  }
`;

export default USER_QUERY;
