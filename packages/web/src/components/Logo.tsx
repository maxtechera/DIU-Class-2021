import React from "react";
import styled from "@emotion/styled";
import pokemonLogo from "./poke.png";

const Logo = styled.img`
  width: 200px;
  opacity: 0.5;
  margin: auto;
`;
const PokemonLogo = () => <Logo src={pokemonLogo?.src} />;

export default PokemonLogo;
