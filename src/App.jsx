import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Features from "./components/Features";
import AppSection from "./components/AppSection";
import About from "./components/About";
import Footer from "./components/Footer";
import { ClientImages, ServerImages } from "./Images";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("#home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section, #home, #features"); // Add #features here
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark-theme");
  };

  const clientFeatures = [
    "Secure File Transfers",
    "Auto-Connect",
    "Drag & Drop Functionality",
    "Real-Time Monitoring",
    "Customizable Interface",
  ];

  const serverFeatures = [
    "Manage Connections",
    "Monitor File Transfers",
    "User Management",
    "Real-Time Notifications",
    "Customizable Settings",
  ];

  return (
    <div className={`app ${theme}`}>
      <Header
        theme={theme}
        handleThemeToggle={handleThemeToggle}
        activeSection={activeSection}
      />
      <main>
        <Home />
        <Features />
        <AppSection
          type="client"
          downloadLink="https://transferx.netlify.app/assets/Transferx.exe"
          features={clientFeatures}
          images={ClientImages}
        />
        <AppSection
          type="server"
          downloadLink="https://transferx.netlify.app/assets/TransferXServer.exe"
          features={serverFeatures}
          images={ServerImages}
        />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
