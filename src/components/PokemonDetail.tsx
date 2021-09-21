import React from "react";
import styled from "@emotion/styled";

type Props = {
  pokemonId?: string;
};

interface Pokemon {
  id: number;
  name: string;
  image: string;
  description: string;
}

const getPokemon = ({ id }: { id: string }) =>
  fetch(`https://pokeapi.co/api/v2/characteristic/${id}/`)
    .then((response) => response.json())
    .then(transformPokemon);

const transformPokemon = (pokemon: any) => ({
  id: pokemon.id,
  name: pokemon.name,
  image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id
    .toString()
    .padStart(3, "0")}.png`,
  description: pokemon.descriptions.find((d: any) => d.language.name === "en")
    .description,
});

const PokemonDetail = ({ pokemonId }: Props) => {
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);

  React.useEffect(() => {
    // Fetch API for Pokemon detail by pokemonId
    // Store state
    if (pokemonId) getPokemon({ id: pokemonId }).then(setPokemon);
  }, [pokemonId]);

  if (!pokemon) return null;
  return (
    <Container>
      <PokemonImage src={pokemon.image} />
      <Row>
        <Name>{pokemon.name}</Name>
        <Number>{`# ${pokemon.id}`}</Number>
      </Row>
      <Row>
        <Description>{pokemon.description}</Description>
      </Row>
    </Container>
  );
};
const Name = styled.h2`
  font-size: 30px;
  color: white;
  margin: 0;
`;
const Number = styled.h3`
  color: white;
  font-size: 30px;
  margin: 0;
`;
const Description = styled.p`
  color: white;
  font-size: 20px;
  line-height: 1.2;
`;
const PokemonImage = styled.img`
  margin: auto;
  max-width: 300px;
  width: 90%;
  display: block;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  flex: 1;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export default PokemonDetail;
