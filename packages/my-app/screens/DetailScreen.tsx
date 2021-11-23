import React from "react";
import styled from "@emotion/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useQuery } from "@apollo/client";
import POKEMON_QUERY from "../core/POKEMON_QUERY";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

const PokemonDetail = ({
  navigation,
  route: {
    params: { id },
  },
}: Props) => {
  const { data } = useQuery(POKEMON_QUERY, { variables: { id } });
  const pokemon = data?.pokemon;
  if (!pokemon) return null;

  return (
    <Container>
      <PokemonImage source={{ uri: pokemon.image }} />
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
const Name = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin: 0;
`;
const Number = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.Text`
  color: white;
  font-size: 20px;
  line-height: 1.2;
`;

const PokemonImage = styled.Image`
  flex: 1;
  resize-mode: contain;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px;
  flex: 1;
`;
const Row = styled.View`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export default PokemonDetail;
