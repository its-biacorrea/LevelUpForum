import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (username, password) => {
    if (username === "user" && password === "password") {
      setLoggedIn(true);
    }
  };

  return (
    <UserContext.Provider value={{ loggedIn, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
