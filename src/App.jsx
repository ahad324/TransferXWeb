import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import TutorialPage from "./pages/Tutorials";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { SparklesCore } from "./components/ui/Sparkles";
import "./App.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <ReactLenis root>
      <>
        <div className="w-full fixed -z-10 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-transferx-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="tutorial/:AppName" element={<TutorialPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </ReactLenis>
  );
};

export default App;
