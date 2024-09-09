import React from "react";
import "../styles/Modal.css";
import { useAppContext } from "../context/Context";
import Button from "./Button";

const Modal = () => {
  const { modalMessage, closeModal } = useAppContext();

  if (!modalMessage) return null;

  return (
    <div className={`modal-overlay ${modalMessage ? "show" : ""}`}>
      <div className={`modal-content ${modalMessage ? "show" : ""}`}>
        <h3>Notice</h3>
        <p>{modalMessage}</p>
        <Button text="Close" onClick={closeModal} className="modal-close" />
      </div>
    </div>
  );
};

export default Modal;
