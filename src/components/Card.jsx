import React from "react";
import Button from "./Button";
import "../styles/Card.css";
import { useAppContext } from "../context/Context";

const PASSWORD = "ahad";
const DEFAULT_MODAL_MESSAGE =
  "🚧 This feature is under construction! 🚀 We're working hard to bring you something awesome. Stay tuned for updates! 💡";

const Card = ({
  title,
  description,
  imgSrc,
  downloadLink,
  modalMessage = DEFAULT_MODAL_MESSAGE,
  isDarkTheme = false,
}) => {
  const { showModal } = useAppContext();

  const handleDownloadClick = () => {
    if (downloadLink) {
      if (downloadLink.includes("server-app")) {
        const password = window.prompt("Enter password:");

        if (password === PASSWORD) {
          window.open(downloadLink, "_blank");
        } else {
          alert("Incorrect password");
        }
      } else {
        window.open(downloadLink, "_blank");
      }
    } else {
      showModal(modalMessage);
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
