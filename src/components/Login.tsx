import React from "react";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import LOGIN_MUTATION from "../core/LOGIN_MUTATION";
import USER_QUERY from "../core/USER_QUERY";

type Props = {};

interface FormState {
  username?: string;
  password?: string;
}

const PokemonDetail = ({}: Props) => {
  const [form, setForm] = React.useState<FormState>({});

  const [login, { loading, error }] = useMutation<any, { input: FormState }>(
    LOGIN_MUTATION,
    {
      // Refetch query, extra request, gets data from API
      // refetchQueries: [USER_QUERY],

      // Update cache directly
      update: (cache, { data }) => {
        const user = data?.login;
        if (user) {
          cache.writeQuery({
            query: USER_QUERY,
            data: { me: user },
          });
        }
      },
    }
  );

  const handleSubmit = () => login({ variables: { input: form } });

  const handleChangeName = (evt: any) => {
    setForm({
      ...form,
      username: evt.target.value,
    });
  };

  const handleChangePassword = (evt: any) => {
    setForm({
      ...form,
      password: evt.target.value,
    });
  };

  return (
    <Container>
      <Inner>
        <Title>React Pokédex</Title>
        <Input
          disabled={loading}
          placeholder="Trainer name"
          onChange={handleChangeName}
        />
        <Input
          disabled={loading}
          placeholder="Password"
          type="password"
          onChange={handleChangePassword}
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Login"}
        </Button>
        {error ? <p style={{ color: "red" }}>{JSON.stringify(error)}</p> : null}
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #282c34;
  box-shadow: inset 0 0 10px rgb(0, 0, 0, 0.8);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
  color: white;
  text-align: center;
  opacity: 0.9;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 100%;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);

  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 18px;
  width: 100%;
  padding: 8px 32px;
  border-radius: 5px;
  border: none;
  margin: auto;
  margin-top: 16px;
`;

export default PokemonDetail;
