export const pokemonsResolver = () =>
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => data?.results?.map(transformPokemon));

const transformPokemon = (pokemon: any, id: number) => ({
  id: id + 1,
  name: pokemon.name,
});
