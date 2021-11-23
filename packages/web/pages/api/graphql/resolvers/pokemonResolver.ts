const pokemonResolver = (_: any, { id }: { id: string }) =>
  fetch(`https://pokeapi.co/api/v2/characteristic/${id}/`)
    .then((response) => response.json())
    .then(transformPokemon);

const transformPokemon = (pokemon: any) => ({
  id: pokemon.id,
  name: pokemon.name,
  description: pokemon.descriptions.find((d: any) => d.language.name === "en")
    .description,
});

export default pokemonResolver;
