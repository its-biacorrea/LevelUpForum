import React, { useState } from "react";
import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginInput = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  width: 250px;
`;

const LoginButton = styled.button`
  background-color: #800080;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <LoginContainer id="login">
      <h2>Faça login para continuar</h2>
      <LoginInput
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <LoginInput
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleLogin}>
        <FiLogIn /> Entrar
      </LoginButton>
    </LoginContainer>
  );
}
