import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  setPokemonId: any;
};
interface Pokemon {
  id: number;
  name: string;
  image: string;
}

const getPokemons = () =>
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => data?.results?.map(transformPokemon));

const transformPokemon = (pokemon: any, id: number) => ({
  id: id + 1,
  name: pokemon.name,
  image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(id + 1)
    .toString()
    .padStart(3, "0")}.png`,
});

const PokemonList = ({}: Props) => {
  const [pokemons, setPokemons] = React.useState<Array<Pokemon>>([]);
  const router = useRouter();
  const pokemonId = router.query.pokemonId as string;

  React.useEffect(() => {
    // Fetch API list of pokemons
    // Set the state to the list of pokemons
    getPokemons().then(setPokemons);
  }, []);

  return (
    <Container>
      <List>
        {pokemons?.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokedex/${pokemon.id}`} passHref>
            <Item selected={pokemonId === pokemon.id.toString()}>
              <Image src={pokemon.image} alt={pokemon.name} />
              <Name>{pokemon.name}</Name>
            </Item>
          </Link>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  padding: 16px 16px;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

const Item = styled.a<{ selected: boolean }>`
  width: 100%;
  border-radius: 5px;
  padding: 8px;
  transition: 0.3s;
  ${({ selected }) => `
    background-color: ${selected ? "rgba(255,255,255,0.5)" : "transparent"};
  `}
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  padding: 0px 16px;
  object-fit: cover;
`;

const Name = styled.p`
  color: white;
  font-size: 16px;
  text-align: center;
  width: 100%;
`;

export default PokemonList;
