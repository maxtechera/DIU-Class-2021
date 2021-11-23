import { gql } from "@apollo/client";

const POKEMONS_QUERY = gql`
  query Pokemons {
    pokemons {
      id
      name
      image
    }
  }
`;

export default POKEMONS_QUERY;
