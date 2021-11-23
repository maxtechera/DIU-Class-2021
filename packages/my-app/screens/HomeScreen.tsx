import React from "react";
import styled from "@emotion/native";
import { FlatList, TouchableHighlight } from "react-native";
// import Link from "next/link";
// import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import POKEMONS_QUERY from "../core/POKEMONS_QUERY";
import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { data, loading, error } = useQuery(POKEMONS_QUERY);
  console.log("Apollo", { data, loading, error });

  return (
    <Container>
      <FlatList
        style={{ flex: 1 }}
        numColumns={2}
        data={data?.pokemons}
        keyExtractor={(item) => item.id}
        renderItem={({ item: pokemon }: any) => (
          <TouchableHighlight
            style={{ flex: 1 }}
            key={pokemon.id}
            onPress={() => navigation.navigate("Detail", { id: pokemon.id })}
          >
            <Item>
              <Image source={{ uri: pokemon.image }} />
              <Name>{pokemon.name}</Name>
            </Item>
          </TouchableHighlight>
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Item = styled.View`
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px;
  margin: 8px;
`;

const Image = styled.Image`
  width: 100%;
  height: 120px;
  padding: 0px 16px;
  resize-mode: contain;
`;

const Name = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;

export default HomeScreen;
