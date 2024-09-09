import React from "react";
import "../styles/Button.css";

const Button = ({ text, onClick, className = "", style = {} }) => (
  <button onClick={onClick} className={`button ${className}`} style={style}>
    <span className="button_lg">
      <span className="button_sl"></span>
      <span className="button_text">{text}</span>
    </span>
  </button>
);

export default Button;
