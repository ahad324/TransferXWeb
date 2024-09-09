import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Modal from "./components/Modal";
import serverIcon from "./assets/icon.svg";
import clientIcon from "./assets/icon.svg";
import { useAppContext } from "./context/Context";

const App = () => {
  const { isDarkTheme, toggleTheme } = useAppContext();

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
        <Card
          title="Server App"
          description="Download the server application to manage and run your server."
          imgSrc={serverIcon}
          downloadLink="/assets/server-app.zip"
        />
        <Card
          title="Client App"
          description="Download the client application to connect to the server."
          imgSrc={clientIcon}
          downloadLink="/assets/client-app.zip"
        />
      </div>
      <Modal />
    </div>
  );
};

export default App;
