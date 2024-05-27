import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { FiLogIn } from "react-icons/fi";
import { FaLevelUpAlt } from "react-icons/fa";
import "../styles/App.css";

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 999;
  background-color: rgba(255, 255, 255);
  color: rgba(0, 0, 0, 0.54);
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  font-size: 16px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: ${({ open }) => (open ? "block" : "none")};
`;

export default function AppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="appbar-container">
      <div className="container-appbar" id="home">
        <a href="#home">
          <div className="logo-appbar">
            <div>
              <img src="logo.png" alt="Logo" />
            </div>
            <div>
              <span>LevelUpForum</span>
            </div>
          </div>
        </a>
        <div className="nav">
          <a href="#postMaisCurtidos">POSTS MAIS CURTIDOS</a>
          <a href="#posts">POSTS</a>
          <a href="#addPost">ADICIONAR NOVO POST</a>
        </div>
        <div className="appbar-end">
          {!loggedIn && (
            <a href="#login" id="login" onClick={handleLogin}>
              <FiLogIn />
            </a>
          )}
          <button onClick={toggleDrawer}>
            <VscThreeBars />
          </button>
        </div>
      </div>
      <DrawerContainer open={drawerOpen}>
        <div className="icons-container">
          <span className="icon">
            <IoMdHome />
          </span>
          <a href="#home">Home</a>
        </div>
        <div className="icons-container">
          <span className="icon">
            <FaLevelUpAlt />
          </span>
          <a href="https://egvelho-blog-template.netlify.app/blog">
            Posts mais curtidos
          </a>
        </div>
        {loggedIn && (
          <>
            <div className="icons-container">
              <span className="icon">
                <FiLogIn />
              </span>
              <a href="#login">Login</a>
            </div>
            <div className="icons-container">
              <span className="icon">
                <HiMagnifyingGlassPlus />
              </span>
              <a href="#saiba-mais">Saiba mais</a>
            </div>
          </>
        )}
      </DrawerContainer>
      <Overlay open={drawerOpen} onClick={toggleDrawer} />
    </div>
  );
}
