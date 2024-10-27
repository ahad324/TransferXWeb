import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Header from "./components/Header";
import HomePage from "./HomePage";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("TransferXTheme") || "light";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("TransferXTheme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ReactLenis root>
      <Router>
        <div className={`app ${theme}`}>
          <Header theme={theme} handleThemeToggle={handleThemeToggle} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
};

export default App;
