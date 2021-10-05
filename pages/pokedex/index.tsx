import styled from "@emotion/styled";
import Pokedex, { PokedexLogin } from "../../src/components/Pokedex";
import useUser from "../../src/core/useUser";

interface Props {
  pokemons?: Array<any>;
}

const Home = ({ pokemons }: Props) => {
  const { user, setUser } = useUser();
  console.log("cliente", pokemons);
  return (
    <Container>
      {user ? (
        <Pokedex pokemons={pokemons} setUser={setUser} />
      ) : (
        <PokedexLogin setUser={setUser} />
      )}
    </Container>
  );
};

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

export const getServerSideProps = async () => {
  console.log("GetServerSideProps");
  const pokemons = await getPokemons();
  return {
    props: {
      pokemons,
    },
  };
};

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #20112e;
`;
export default Home;
