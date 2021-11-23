import { pokemonsResolver } from "./pokemonsResolver";
import pokemonResolver from "./pokemonResolver";
import signupResolver from "./signupResolver";
import loginResolver from "./loginResolver";
import meResolver from "./meResolver";

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    pokemons: pokemonsResolver,
    pokemon: pokemonResolver,
    me: meResolver,
  },
  Mutation: {
    signup: signupResolver,
    login: loginResolver,
  },

  Pokemon: {
    name: (pokemon: any) => {
      if (pokemon.name) return pokemon.name;

      return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`)
        .then((response) => response.json())
        .then((data) => data?.name);
    },
    image: (pokemon: any) =>
      `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id
        .toString()
        .padStart(3, "0")}.png`,
  },
};

export default resolvers;
