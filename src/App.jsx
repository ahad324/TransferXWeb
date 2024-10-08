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
    setVersionData({
      client: "/assets/TransferX.exe",
      server: "/assets/TransferXServer.exe",
    });
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
