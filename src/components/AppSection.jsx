import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import "../styles/AppSection.css";
import { ImageSwiper } from "../components/ui/ImageSwipper";

const AppSection = ({ type, downloadLink, features, images }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleDownload = () => {
    const password = prompt(
      "Please enter the password to download the Server App:"
    );
    if (password === "ahad") {
      window.open(downloadLink, "_blank");
      setErrorMessage("");
    } else {
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  return (
    <section id={`${type}-app`} className={`app-section ${type}`}>
      <div className="container">
        <div className="app-content">
          <div className="app-info">
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)} App</h2>
            <p className="app-description">
              Download our {type} app to start transferring files today.
            </p>
            <button
              className="download-button"
              name="App_download_button"
              onClick={handleDownload}
            >
              <FaDownload /> Download{" "}
              {type.charAt(0).toUpperCase() + type.slice(1)} App
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}{" "}
            <div className="feature-list">
              <h3>Key Features:</h3>
              <ul>
                {features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="app-images">
            <ImageSwiper images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
