import React from "react";
import Button from "./Button";
import "../styles/Card.css";
import { useAppContext } from "../context/Context";

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

  const handleDownloadClick = async () => {
    if (downloadLink) {
      try {
        const url = new URL(downloadLink, window.location.origin);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = downloadLink.split("/").pop();
        document.body.appendChild(link);
        link.click();
        console.log(link);
        link.remove();
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Failed to download file:", error);
        showModal(modalMessage);
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
