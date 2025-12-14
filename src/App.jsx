import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
/* import { ReactLenis } from "lenis/react"; // REMOVED for native scroll performance */
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import AppRoutes from "./router/AppRoutes";
import "./App.css";

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <ScrollToTop />
      {isLoading ? (
        <Loader ClassName="h-screen w-full bg-[background-color]" />
      ) : (
        <AppRoutes />
      )}
      <Footer />
    </>
  );
};

export default App;
