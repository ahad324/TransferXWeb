import React, { useState } from "react";
import "../styles/PasswordModal.css";

const PasswordModal = ({ isOpen, onClose, onSubmit, passwordPrompt }) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const secretpass = import.meta.env.VITE_PASSWORD;
    if (password === secretpass) {
      onSubmit(password);
      setPassword("");
      onClose();
      setErrorMessage("");
    } else {
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content bg-card-background text-text-color">
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <h3 className="text-xl font-semibold">{passwordPrompt}</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-md font-semibold"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-style"
                placeholder="••••••••"
                required
              />
            </div>
            {errorMessage && (
              <p className="text-[--error-color]">{errorMessage}</p>
            )}
            <button type="submit" className="button primary m-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
