import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Features from "./components/Features";
import AppSection from "./components/AppSection";
import About from "./components/About";
import Footer from "./components/Footer";
import { ClientImages, ServerImages } from "./Images";
import Loader from "./components/Loader";

const HomePage = () => {
  const [versionData, setVersionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      } catch (error) {
        console.error("Error fetching version data:", error);
      }
    };

    fetchVersionData();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
    <>
      {isLoading ? (
        <Loader ClassName={"h-screen"} />
      ) : (
        <div>
          <main>
            <Home />
            <Features />
            {versionData ? (
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
            ) : (
              <Loader Message={"Loading Apps..."} />
            )}
            <About />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
