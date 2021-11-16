import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    hello: String
    pokemons: [Pokemon]

    me: User
  }

  type Mutation {
    signup(input: SignupInput!): User
    login(input: LoginInput!): User!
  }

  input SignupInput {
    username: String!
    password: String!
    name: String
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type Pokemon {
    id: ID!
    name: String
    image: String
  }

  type User {
    id: ID!
    username: String!
    name: String
  }
`;

export default typeDefs;
