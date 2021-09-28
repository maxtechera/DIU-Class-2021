import * as React from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import Pokedex, { PokedexLogin } from "../../src/components/Pokedex";
import { useRouter } from "next/router";

const useUser = () => {
  const [user, setUserState] = React.useState(null);

  React.useEffect(() => {
    // Inializarlo con el valor en localStorage
    if (typeof localStorage !== "undefined") {
      setUserState(JSON.parse(localStorage.getItem("user") ?? ""));
    }
  }, []);

  const setUser = (newUser: any) => {
    // Setear el usuario en estado
    setUserState(newUser);
    // Setear el usuario en localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ username: newUser?.username })
    );
  };

  return [user, setUser];
};

const Home: NextPage = () => {
  const [user, setUser] = useUser();
  const router = useRouter();
  const { pokemonId } = router.query;

  return (
    <Container>
      {user ? (
        <Pokedex pokemonId={pokemonId} />
      ) : (
        <PokedexLogin setUser={setUser} />
      )}
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
