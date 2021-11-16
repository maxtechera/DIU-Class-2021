import * as React from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import Pokedex, { PokedexLogin } from "../../src/components/Pokedex";
import { useRouter } from "next/router";
import useUser from "../../src/core/useUser";

const Home: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { pokemonId } = router.query;

  return (
    <Container>
      {user ? <Pokedex pokemonId={pokemonId as string} /> : <PokedexLogin />}
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
