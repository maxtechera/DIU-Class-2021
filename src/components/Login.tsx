import React from "react";
import styled from "@emotion/styled";

type Props = {
  setUser: (user: any) => void;
};

interface FormState {
  username?: string;
  password?: string;
}

const PokemonDetail = ({ setUser }: Props) => {
  const [form, setForm] = React.useState<FormState>({});
  const [error, setError] = React.useState("");

  const handleSubmit = () => {
    setError("");
    if (form.username && form.password) {
      if (form.username === "admin" && form.password === "admin") {
        // Send username and password to server
        // Handle success
        // Get the user from response
        setUser(form);
      } else {
        setError("Invalid username or password");
      }
    }
  };

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
        <Input placeholder="Trainer name" onChange={handleChangeName} />
        <Input
          placeholder="Password"
          type="password"
          onChange={handleChangePassword}
        />
        <Button onClick={handleSubmit}>Login</Button>
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
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
