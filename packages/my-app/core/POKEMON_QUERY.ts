import { gql } from "@apollo/client";

const POKEMON_QUERY = gql`
  query Pokemon($id: ID!) {
    pokemon(id: $id) {
      id
      name
      image
      description
    }
  }
`;

export default POKEMON_QUERY;
