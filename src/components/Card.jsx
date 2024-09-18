import React from "react";
import Button from "./Button";
import "../styles/Card.css";
import { useAppContext } from "../context/Context";

const Card = ({
  title,
  description,
  imgSrc,
  downloadLink,
  isPasswordProtected = false,
  isDarkTheme = false,
}) => {
  const { showModal, PASSWORD } = useAppContext();

  const handleDownloadClick = () => {
    if (isPasswordProtected) {
      const password = window.prompt("Enter password:");
      if (password === PASSWORD) {
        window.open(downloadLink, "_blank");
      } else {
        alert("Incorrect password");
      }
    } else {
      window.open(downloadLink, "_blank");
    }
  };

  return (
    <div className={`card ${isDarkTheme ? "dark" : ""}`}>
      <div className="card-inner">
        <img src={imgSrc} alt={`${title} Icon`} />
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <Button
          text="Download"
          onClick={handleDownloadClick}
          className="download-btn"
        />
      </div>
    </div>
  );
};

export default Card;
