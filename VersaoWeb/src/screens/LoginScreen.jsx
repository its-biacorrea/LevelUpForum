import React, { useState, useContext } from "react";
import { FiLogIn } from "react-icons/fi";
import "../styles/Login.css";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    // Simulating login
    setLoggedIn(true);
    navigate("/home");
  };

  return (
    <div id="login" className="login-container">
      <h2>Faça login para continuar</h2>
      <input
        className="login-input"
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        <FiLogIn /> Entrar
      </button>
    </div>
  );
}
