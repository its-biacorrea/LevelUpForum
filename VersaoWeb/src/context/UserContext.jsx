import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (username, password) => {
    if (username === "user" && password === "password") {
      setLoggedIn(true);
    }
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserContext;
