import { pokemonsResolver } from "./pokemonsResolver";
import signupResolver from "./signupResolver";
import loginResolver from "./loginResolver";
import meResolver from "./meResolver";

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    pokemons: pokemonsResolver,
    me: meResolver,
  },
  Mutation: {
    signup: signupResolver,
    login: loginResolver,
  },
};

export default resolvers;
