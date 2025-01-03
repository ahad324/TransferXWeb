import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AppSection from "./components/AppSection";
import About from "./components/About";
import Footer from "./components/Footer";
import { ClientImages, ServerImages } from "./Images";

const HomePage = () => {
  const clientFeatures = [
    "Files Zipping",
    "Auto-Connect",
    "Drag & Drop Functionality",
    "Real-Time Updates",
    "Dark/Light Theme",
  ];

  const serverFeatures = [
    "Manage Connections",
    "Monitor File Transfers",
    "User Management",
    "Real-Time Updates",
    "Customizable Settings",
  ];

  return (
    <div>
      <main>
        <Hero />
        <Features />

        <>
          <AppSection
            type="client"
            downloadLink={
              "https://ahad324.github.io/TransferXClient/TransferX.exe"
            }
            features={clientFeatures}
            images={ClientImages}
          />
          <AppSection
            type="server"
            downloadLink={
              "https://ahad324.github.io/TransferXServer/TransferXServer.exe"
            }
            features={serverFeatures}
            images={ServerImages}
          />
        </>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
