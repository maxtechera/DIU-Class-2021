import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    hello: String
    pokemons: [Pokemon]
  }

  type Pokemon {
    id: ID!
    name: String
    image: String
  }
`;

export default typeDefs;
