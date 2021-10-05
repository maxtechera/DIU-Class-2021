import { pokemonsResolver } from "./pokemonsResolver";

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    pokemons: pokemonsResolver,
  },
};

export default resolvers;
