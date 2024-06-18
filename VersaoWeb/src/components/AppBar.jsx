import React, { useState, useContext } from "react";
import { VscThreeBars } from "react-icons/vsc";
import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { FiLogIn } from "react-icons/fi";
import { FaLevelUpAlt } from "react-icons/fa";
import "../styles/App.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

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
  const { loggedIn } = useContext(AuthContext);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="appbar-container">
      <div className="container-appbar" id="home">
        <Link to="/home">
          <div className="logo-appbar">
            <div>
              <img src="logo.png" alt="Logo" />
            </div>
            <div>
              <span>LevelUpForum</span>
            </div>
          </div>
        </Link>
        <div className="nav">
          <Link to="/home#postMaisCurtidos">POSTS MAIS CURTIDOS</Link>
          {loggedIn && (
            <>
              <Link data-cy="menu_posts" to="/posts">
                POSTS
              </Link>

              <Link to="/add-post">ADICIONAR NOVO POST</Link>
            </>
          )}
        </div>
        <div className="appbar-end">
          {!loggedIn && (
            <Link to="/login" id="login">
              <FiLogIn />
            </Link>
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
          <a href="/">Home</a>
        </div>
        <div className="icons-container">
          <span className="icon">
            <FaLevelUpAlt />
          </span>
          <Link to="/home#postMaisCurtidos">Posts mais curtidos</Link>
        </div>
        {loggedIn && (
          <>
            <div className="icons-container">
              <span className="icon">
                <HiMagnifyingGlassPlus />
              </span>
              <Link to="/add-post">Adicionar Novo Post</Link>
            </div>
            <div className="icons-container">
              <span className="icon">
                <FiLogIn />
              </span>
              <Link to="/post/:id">Exibir Post</Link>
            </div>
          </>
        )}
      </DrawerContainer>
      <Overlay open={drawerOpen} onClick={toggleDrawer} />
    </div>
  );
}
