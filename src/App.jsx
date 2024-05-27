import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/roboto";
import "./styles/App.css";
import AppBar from "./components/AppBar";
import HomeScreen from "./screens/HomeScreen";
import PostsListScreen from "./screens/PostsListScreen";
import PostShowScreen from "./screens/PostShowScreen";
import PostInsertScreen from "./screens/PostInsertScreen";
import LoginScreen from "./screens/LoginScreen";
import Rodape from "./components/Rodape";

export default function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/posts" element={<PostsListScreen />} />
          <Route path="/post/:id" element={<PostShowScreen />} />
          <Route path="/add-post" element={<PostInsertScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
        <Rodape />
      </div>
    </Router>
  );
}
