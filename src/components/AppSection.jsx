import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { ImageSwiper } from "../components/ui/ImageSwipper";
import PasswordModal from "./PasswordModal";
import "../styles/AppSection.css";

const AppSection = ({ type, downloadLink, features, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    window.open(downloadLink, "_blank");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <button className="download-button" onClick={handleOpenModal}>
              <FaDownload /> Download{" "}
              {type.charAt(0).toUpperCase() + type.slice(1)} App
            </button>
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
            <PasswordModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSubmit={handleDownload}
              passwordPrompt={`Enter password to download ${
                type.charAt(0).toUpperCase() + type.slice(1)
              } App`}
            />
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
