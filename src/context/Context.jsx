// src/Context.js
import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [modalMessage, setModalMessage] = useState(null);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const showModal = (message) => {
    setModalMessage(message);
  };

  const closeModal = () => {
    setModalMessage(null);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, modalMessage, showModal, closeModal }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
