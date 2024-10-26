import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./HomePage";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark-theme");
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header theme={theme} handleThemeToggle={handleThemeToggle} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
