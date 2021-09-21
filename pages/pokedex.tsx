import * as React from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import Pokedex, { PokedexLogin } from "../src/components/Pokedex";

const Home: NextPage = () => {
  const [user, setUser] = React.useState(null);

  return (
    <Container>
      {user ? <Pokedex /> : <PokedexLogin setUser={setUser} />}
    </Container>
  );
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
