import React from "react";
import styled from "@emotion/styled";
import Login from "./Login";
import PokemonDetail from "./PokemonDetail";
import PokemonList from "./PokemonList";
import pokemonLogo from "./poke.png";

type Props = {
  setUser: (user: any) => void;
  pokemonId?: string;
};

export const PokedexLogin = ({ setUser }: Props) => {
  return (
    <Container>
      <LeftContainer>
        <Login setUser={setUser} />
      </LeftContainer>
      <InnerContainer>
        <DisplayContainer>
          <Logo src={pokemonLogo?.src} />
        </DisplayContainer>
      </InnerContainer>
    </Container>
  );
};

export const Pokedex = ({ pokemonId }: Props) => {
  // const [pokemonId, setPokemonId] = React.useState();
  return (
    <Container>
      <LeftContainer>
        <DisplayContainer>
          <PokemonList />
        </DisplayContainer>
      </LeftContainer>
      <InnerContainer>
        <DisplayContainer>
          <PokemonDetail pokemonId={pokemonId} />
        </DisplayContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  width: 90vw;
  max-height: 700px;
  max-width: 1000px;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 20px #000000;
`;

const DisplayContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #282c34;
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;
const InnerContainer = styled.div`
  height: 100%;
  width: 50%;
  background: #9c251c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;
  border-radius: 10px;
`;

const LeftContainer = styled(InnerContainer)`
  background: #bf3027;
`;

const Logo = styled.img`
  width: 200px;
  opacity: 0.5;
  margin: auto;
`;

export default Pokedex;
