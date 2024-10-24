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
  const [versionData, setVersionData] = useState(null);

  useEffect(() => {
    const fetchVersionData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/ahad324/TransferX/releases/latest"
        );
        const data = await response.json();
        setVersionData({
          client: data.assets[0].browser_download_url,
          server: data.assets[1].browser_download_url,
        });
        // console.log("Fetched version data:", {
        //   client: data.assets[0].browser_download_url,
        //   server: data.assets[1].browser_download_url,
        // }); // Log the fetched data
      } catch (error) {
        console.error("Error fetching version data:", error);
      }
    };

    fetchVersionData();
  }, []);

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

    const sections = document.querySelectorAll("section, #home, #features");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
        {versionData && (
          <>
            <AppSection
              type="client"
              downloadLink={versionData.client}
              features={clientFeatures}
              images={ClientImages}
            />
            <AppSection
              type="server"
              downloadLink={versionData.server}
              features={serverFeatures}
              images={ServerImages}
            />
          </>
        )}
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
