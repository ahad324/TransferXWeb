import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Modal from "./components/Modal";
import serverIcon, { default as clientIcon } from "./assets/icon.svg";
import { useAppContext } from "./context/Context";

const PASSWORD = "ahad";

const App = () => {
  const { isDarkTheme, toggleTheme } = useAppContext();
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
        console.log(versionData);
      } catch (error) {
        console.error("Error fetching version data:", error);
      }
    };

    fetchVersionData();
  }, []);

  return (
    <div className={`app ${isDarkTheme ? "dark" : "light"}`}>
      <div className="header">
        <h1>Download Our Apps</h1>
        <p>Choose between our server and client applications below.</p>
        <Button
          text={isDarkTheme ? "🌞 Light Mode" : "🌙 Dark Mode"}
          onClick={toggleTheme}
          className="theme-toggler"
        />
      </div>
      <div className="cards">
        {versionData && (
          <>
            <Card
              title="Server App"
              description="Download the server application to manage and run your server."
              imgSrc={serverIcon}
              downloadLink={versionData.server}
              isPasswordProtected={true}
            />
            <Card
              title="Client App"
              description="Download the client application to connect to the server."
              imgSrc={clientIcon}
              downloadLink={versionData.client}
            />
          </>
        )}
      </div>
      <Modal />
    </div>
  );
};

export default App;
