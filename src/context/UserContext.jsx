import { createContext, useState } from "react";

// Skapa en ny kontext
export const UserContext = createContext();

// Skapa en komponent som innehåller state du vill dela
export const UserProvider = (props) => {
  const [userName, setUserName] = useState("John John");
  const lsIsLoggedIn = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(lsIsLoggedIn);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <UserContext.Provider
      value={{ userName, setUserName, isLoggedIn, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
