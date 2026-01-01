import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./router/AppRoutes";
import "./App.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <ReactLenis root>
      <div className="app">
        <Header />
        <ScrollToTop />
        <AppRoutes />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
